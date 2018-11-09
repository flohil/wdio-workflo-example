import { stepsGetter, stepsSetter } from 'wdio-workflo'

////////////////////////////////////////////////////////////////////////
// EDIT THIS AREA IN ORDER FOR INTELLISENSE TO SUGGEST STEPS BY NAMES
////////////////////////////////////////////////////////////////////////

import HomePageSteps from '?/steps/homepage.step'
import DemoPageSteps from '?/steps/demo.step'

// create a single steps object that merges all single step definitions

const Steps:
  typeof HomePageSteps &
  typeof DemoPageSteps
= Object.assign(
  HomePageSteps,
  DemoPageSteps
)

////////////////////////////////////////////////////////////////////////

const steps = new Proxy(Steps, {
  get: (target, name, receiver) => stepsGetter(target, name, receiver),
  set: (target, name, value) => stepsSetter(target, name, value)
})

export default steps