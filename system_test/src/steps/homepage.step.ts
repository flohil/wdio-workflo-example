import { ParameterizedStep } from 'wdio-workflo'
import steps from '?/steps'
import { core, pages } from '?/page_objects'

const HomePageSteps = {
  "open homepage": 
  (params?: IOptStepArgs<{}, void>): IParameterizedStep =>
    new ParameterizedStep(params, (): void => {
      browser.url('/')
    }),
  "get title": 
  (params?: IOptStepArgs<{}, string>): IParameterizedStep =>
    new ParameterizedStep(params, (): string => {
      return browser.getTitle()
    }),
  "success":
  (params?: IOptStepArgs<{}, void>): IParameterizedStep =>
    new ParameterizedStep(params, (): void => {
      const html = browser.element('//div[@id="asdfasdfasdf"]').getHTML()
    }),
  "failure":
  (params?: IOptStepArgs<{}, void>): IParameterizedStep =>
    new ParameterizedStep(params, (): void => {
      browser.getUrl()
    }),
  "test chaining functionality": 
    (params?: IOptStepArgs<{}, void>): IParameterizedStep =>
      new ParameterizedStep(params, (): void => {
        const logo = pages.google.logo

        console.log("logo", logo.getText())
        console.log("logo selector", logo.getSelector())

        const list = pages.google.list

        console.log('list length:', list.getLength())
        console.log("list selector", list.getSelector())

        console.log('logo inside group selector:', pages.google.logoGroup.logo.getSelector())

        console.log('text group result: ', pages.google.logoGroup.GetText({
          filter: {
            logo: false,
            logoList: {
              austria: false
            },
            logoMap: {
              logo: false,
              logo2: true
            }
          }
        }))

        // check that filter works

        /* console.log('text group result: ', pages.google.logoGroup.GetText({filter: {
          logoList: true,
          logoMap: true
        }})) */
      
        const divList = pages.google.divList
        const logoListElem = divList.firstBy().containedClass('logo-subtext').get()

        console.log('logoListElem: ', logoListElem.getSelector())
        console.log('logoListElem: ', logoListElem.getText())

        const divMap = pages.google.divMap

        console.log('logoMapElem: ', divMap.$.logo.getSelector())
        console.log('logoMapElem: ', divMap.$.logo.getText())

        console.log(pages.google.input.getText())

        browser.debug()

        pages.google.input.setValue('Google')
        pages.google.inputGroup.SetValue({
          values: {
            input: "Input",
            inputMap: {
              "search": "Jodel"
            },
            inputList: {
              "search": "Hallo du"
            }
          }
        })

        browser.debug()
      }),
}

export default HomePageSteps