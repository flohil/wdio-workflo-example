// call this script in a shell:
//    node runscript.js > output

import {translations} from '../../src/static/js/statics.js'
import * as _ from 'lodash'

// supported languages
const languages = [ 'de', 'en' ]

// look for missing translations
let existT: any
const errorPaths = {}

function traverse(obj: any, result: any, language: string) {
  if (!result) { 
    result = {}
  }

  if (typeof obj === 'object') {
    for (const key in obj) {
      result[key] = traverse(obj[key], result[key], language)
    }
  } else {
    result.___leaf = true
    result[language] = true
  }
  
  return result
}

function control(result: any, language: string, path?: string) {
  if (!result.___leaf) {
    for (const key in result) {
      control(result[key], language, (path) ? `${path}.${key}` : key)
    }
  } else {
    if(!result[language]) {
      console.log(`Translation "${path}" does not exist for language <${language}>`)
      errorPaths[path] = true
    }
  }  
}

for (const language of languages) {
  existT = traverse(translations[language], existT, language)
}

for (const language of languages) {
  control(existT, language)
}

for (const errorPath in errorPaths) {
  console.log()
  for (const language of languages) {
    console.log(`${errorPath} -> ${language}: ${_.get(translations[language], errorPath)}`)
  }
}