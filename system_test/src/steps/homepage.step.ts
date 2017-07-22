import { ParameterizedStep } from 'wdio-workflo'
import steps from '?/steps'

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
    })
}

export default HomePageSteps