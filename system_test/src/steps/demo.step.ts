import { ParameterizedStep } from 'wdio-workflo'
import steps from '?/steps'
import { core, pages } from '?/page_objects'

const DemoPageSteps = {
  "open demopage %{path}":
  (params: IStepArgs<{path: string}, void>): IParameterizedStep =>
    new ParameterizedStep(params, ({path}): void => {
      pages.demo.base.open({path})
    }),
  "enable input in demopage":
  (params?: IOptStepArgs<{}, void>): IParameterizedStep =>
    new ParameterizedStep(params, (): void => {
      pages.demo.dynamicControls.enableButton.click()
    })
}

export default DemoPageSteps