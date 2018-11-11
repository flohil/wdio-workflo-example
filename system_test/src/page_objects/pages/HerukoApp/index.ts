import { CheckboxesPage } from './Checkboxes.page'
import { DropdownPage } from './Dropdown.page'
import { DynamicControlsPage } from './DynamicControls.page'
import { HerukoAppPage } from './HerukoApp.page'

export * from './Checkboxes.page'
export * from './Dropdown.page'
export * from './DynamicControls.page'
export * from './HerukoApp.page'

export const checkboxes = new CheckboxesPage()
export const dynamicControls = new DynamicControlsPage()
export const dropdown = new DropdownPage()
export const base = new HerukoAppPage()
