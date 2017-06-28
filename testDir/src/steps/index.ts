import { stepsGetter, stepsSetter } from 'wdio-workflo'

////////////////////////////////////////////////////////////////////////
// EDIT THIS AREA IN ORDER FOR INTELLISENSE TO SUGGEST STEPS BY NAMES
////////////////////////////////////////////////////////////////////////

import LoginSteps from '~/steps/login.step'
import LogoutSteps from './logout.step'
import * as types from '../types' // surpress error for cannot be named

// create a single steps object that merges all single step definitions
const Steps = Object.assign({}, LoginSteps, LogoutSteps)

////////////////////////////////////////////////////////////////////////

const steps = new Proxy(Steps, {
  get: (target, name, receiver) => stepsGetter(target, name, receiver),
  set: (target, name, value) => stepsSetter(target, name, value)
})

export default steps