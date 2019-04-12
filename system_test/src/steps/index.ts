import { defineSteps, proxifySteps } from 'wdio-workflo';

////////////////////////////////////////////////////////////
// EDIT THIS AREA TO CREATE A MERGED STEP DEFINITIONS OBJECT
////////////////////////////////////////////////////////////

// IMPORT YOUR STEP DEFINITIONS
import { commonSteps } from './common.step';
import { footerSteps } from './footer.step';
import { feedSteps } from './feed.step';
import { registrationSteps } from './registration.step';

// MERGE ALL STEP DEFINITIONS INTO ONE OBJECT
const stepDefinitions = defineSteps({
  ...commonSteps,
  ...footerSteps,
  ...feedSteps,
  ...registrationSteps
});

////////////////////////////////////////////////////////////

const steps = proxifySteps(stepDefinitions);

export { steps };
