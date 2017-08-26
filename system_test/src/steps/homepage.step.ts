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
  "display logo text": 
    (params?: IOptStepArgs<{}, void>): IParameterizedStep =>
      new ParameterizedStep(params, (): void => {
        const logo = pages.google.logo

        console.log("logo", logo.getText())
        console.log("logo selector", logo.getSelector())

        /*const list = pages.google.list

        console.log('list length:', list.getLength())
        console.log("list selector", list.getSelector())

        console.log('logo inside group selector:', pages.google.logoGroup.logo.getSelector())*/
      }),
  
}

export default HomePageSteps