import { Step, IOptStepArgs } from 'wdio-workflo'
import { pages } from '?/page_objects'

const ToolsQAPageSteps = {
  "open toolsqa page %{path}":
  (params?: IOptStepArgs<{path?: string}, void>) =>
    new Step(params, ({path}): void => {
      pages.toolsQa.open({path})
    }),
}

export default ToolsQAPageSteps