import { defineSteps, proxifySteps } from 'wdio-workflo';

////////////////////////////////////////////////////////////
// EDIT THIS AREA TO CREATE A MERGED STEP DEFINITIONS OBJECT
////////////////////////////////////////////////////////////

// IMPORT YOUR STEP DEFINITIONS
import { demoSteps } from './demo.step';

// MERGE ALL STEP DEFINITIONS INTO ONE OBJECT AS SHOWN BELOW
const stepDefinitions = defineSteps({
  ...demoSteps,
});

////////////////////////////////////////////////////////////

const steps = proxifySteps(stepDefinitions);

export { steps };
