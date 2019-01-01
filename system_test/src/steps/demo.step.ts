import { Step, IOptStepArgs, IStepArgs } from 'wdio-workflo'
import { pages } from '?/page_objects'

const DemoPageSteps = {
  "open demopage %{path}":
  (params: IStepArgs<{path: string}, void>) =>
    new Step(params, ({path}): void => {
      pages.demo.base.open({path})
    }),
  "enable input in demopage":
  (params?: IOptStepArgs<{}, void>) =>
    new Step(params, (): void => {
      pages.demo.dynamicControls.enableButton.click()
    })
}

export default DemoPageSteps