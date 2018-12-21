import { ParameterizedStep } from 'wdio-workflo'
import steps from '?/steps'
import { core, pages } from '?/page_objects'

const ToolsQAPageSteps = {
  "open toolsqa page %{path}":
  (params?: IOptStepArgs<{path?: string}, void>): IParameterizedStep =>
    new ParameterizedStep(params, ({path}): void => {
      pages.toolsQa.open({path})
    }),
}

export default ToolsQAPageSteps