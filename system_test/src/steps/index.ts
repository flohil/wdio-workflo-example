import {defineSteps, proxifySteps} from 'wdio-workflo'

////////////////////////////////////////////////////////////
// EDIT THIS AREA TO CREATE A MERGED STEP DEFINITIONS OBJECT
////////////////////////////////////////////////////////////

// IMPORT YOUR STEP DEFINITIONS
import { npmJsSteps } from '?/steps/npmjs.step'

// MERGE ALL STEP DEFINITIONS IN ONE OBJECT AS SHOWN BELOW
const stepDefinitions = defineSteps({
  ...npmJsSteps
})

////////////////////////////////////////////////////////////

const steps = proxifySteps(stepDefinitions)

export {steps }