const moment = require('moment')

const Converter = (function () {

  let _fs = null
  let _fileLines = null
  let _currentLine = null
  const _collections = []

  // local( server location ) timezone offset compared to utc time in minutes
  const tzOffset = moment().utcOffset() // set this manually if server location does not equal test script location

  const reportError = function (errorText) {
    console.log(`ERROR: ${errorText}`)
    process.exit(1)
  }

  const getNextLine = function () {
    return _fileLines.shift().trim()
  }

  const hasMoreLines = function () {
    return _fileLines.length > 0
  }

  const readFile = function (fileName) {
    const fileAsString = _fs.readFileSync(fileName, 'utf8')
    _fileLines = fileAsString.split('\n')
  }

  const startsWith = function (str, textToFind) {
    return str.trim().indexOf(textToFind.trim()) === 0
  }

  const convertData = function (data, type) {
    if(startsWith(type, 'letchar') || type.includes('text') || startsWith(type, 'varchar')) {
      return data
    }
    else if(startsWith(type, 'date')) {
      if ( data === 'NULL' ) {
        return data
      } else {
        return moment.utc( data ).utcOffset(tzOffset).format('YYYY-MM-DD HH:mm:ss')
      }
    }
    else if(startsWith(type, 'int') || startsWith(type, 'decimal')) {
      return Number(data)
    }
    else if(startsWith(type, 'tinyint')) {
      return data == 1
    }
    else if(type.includes('blob')) {
      return {} // ignore binary files
    }
    else {
      console.log(`Don\'t know this type: ${type}`)
      return data
    }
  }

  const readNextTableDef = function ( hadNoValuesLine ) {
    while(hasMoreLines()) {
      let currentLine

      if ( typeof hadNoValuesLine === 'undefined' ) {
        currentLine = getNextLine()
      } else {
        currentLine = hadNoValuesLine
        hadNoValuesLine = undefined
      }

      if(startsWith(currentLine, 'CREATE TABLE')) {
        const tableName = currentLine.split('`')[1]
        console.log('Converting table: ' + tableName)
        currentLine = getNextLine()
        const fields = []

        while(startsWith(currentLine, '`')) {
          const parts = currentLine.split('`')
          const fieldName = parts[1]
          const fieldType = parts[2].split(' ')[1]

          // why is this in here in original file?
          /*if(fieldName === 'id') {
            fieldName = '_id'
            fieldType = 'text'
          }*/

          fields.push({
            name: fieldName,
            type: fieldType
          })

          currentLine = getNextLine()
        }

        _collections.push({
          name: tableName,
          fields: fields
        })

        return
      }
    }
  }

  const readTableValues = function () {
    const currentCollection = _collections[_collections.length - 1]
    const tableName = currentCollection.name
    const fields = currentCollection.fields

    while(hasMoreLines()) {
      let currentLine = getNextLine()

      // previous table had no values
      if(startsWith(currentLine, 'CREATE TABLE')) {
        return currentLine
      }

      if(startsWith(currentLine, 'INSERT INTO') || startsWith(currentLine, 'REPLACE INTO')) {
        if(startsWith(currentLine, 'INSERT INTO')) {
          currentLine = currentLine.replace('INSERT INTO `' + tableName + '` VALUES ', '')
        } else {
          currentLine = currentLine.replace('REPLACE INTO `' + tableName + '` VALUES ', '')
        }
        let index = 1
        let valueId = 0
        let insideString = false
        let currentValue = ''
        const values = []
        let pair = {}

        while(index < currentLine.length) {
          const previousChar = currentLine.charAt(index - 1)
          const currentChar = currentLine.charAt(index)

          if((currentChar === ',' || currentChar === ')') && !insideString) {
            const field = fields[valueId]
            pair[field.name] = convertData(currentValue, field.type)

            valueId++
            currentValue = ''

            if(currentChar === ')') {
              index += 2
              values.push(pair)
              pair = {}
              valueId = 0
            }
          }
          else if(currentChar === "'" && previousChar !== '\\') {
            insideString = !insideString
          }
          else {
            currentValue = currentValue + currentChar
          }

          index++
        }

        _collections[_collections.length - 1].values = values
        return
      }
    }
  }

const deleteFolderRecursive = function(fs, path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach((file) => {
      const curPath = `${path}/${file}`
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

  return {
    init: function () {
      if(process.argv.length !== 4) {
        reportError(':-)Please specify exactly one mysqldump input file')
      }

      _fs = require('fs')
      const fileName = process.argv[2]
      const outDir = process.argv[3]
      readFile(fileName)

      let hadNoValuesLine = undefined

      while(hasMoreLines()) {
        readNextTableDef( hadNoValuesLine )
        hadNoValuesLine = readTableValues()
      }

      try {
          // Query the entry
          const stats = _fs.lstatSync(outDir)

          // Is it a directory?
          if (stats.isDirectory()) {
            deleteFolderRecursive(_fs, outDir)
          }
      }
      catch (e) {
          // output dir does not exist
      }

      _fs.mkdirSync(outDir)

      for(let i = 0; i < _collections.length; i++) {
        const content = `module.exports = ${JSON.stringify( _collections[i].values, undefined, 2)}`
        _fs.writeFileSync(`${outDir}/${_collections[i].name}.js`, content)
      }

      process.exit()
    }
  }
})()

Converter.init()