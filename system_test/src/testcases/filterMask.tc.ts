import steps from '?/steps'
import { pages, stores, elements } from '?/page_objects'

suite("FilterMask Suite", {}, () => {
  testcase("list get", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          console.log("no filterMask list", pages.demo.dynamicControls.buttonList.getText())
          console.log("true filterMask list", pages.demo.dynamicControls.buttonList.getText(true))
          console.log("false filterMask list", pages.demo.dynamicControls.buttonList.getText(false))
          console.log("array filterMask list", pages.demo.dynamicControls.buttonList.getText([true, false]))
          console.log("undefined null array filterMask list",
            pages.demo.dynamicControls.buttonList.getText([undefined, null]))
          console.log("null filterMask list", pages.demo.dynamicControls.buttonList.getText(null))
        })
      }
    }))
  })

  testcase("map get", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          console.log("no filterMask map", pages.demo.dynamicControls.buttonMap.getText())
          console.log("true filterMask map", pages.demo.dynamicControls.buttonMap.getText({
            enable: true,
            remove: true
          }))
          console.log("false filterMask map", pages.demo.dynamicControls.buttonMap.getText({
            enable: false,
            remove: false
          }))
          console.log("mixed filterMask map", pages.demo.dynamicControls.buttonMap.getText({
            enable: true,
            remove: false
          }))
          console.log("null filterMask map", pages.demo.dynamicControls.buttonMap.getText(null))
          console.log("undefined or null filterMask map", pages.demo.dynamicControls.buttonMap.getText({
            enable: null,
            remove: undefined
          }))
        })
      }
    }))
  })

  testcase("group get", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          console.log("no filterMask group", pages.demo.dynamicControls.buttonGroup.getText())
          console.log("true filterMask group", pages.demo.dynamicControls.buttonGroup.getText({
            enableButton: true,
            removeButton: true,
            buttonList: true,
            buttonMap: {
              enable: true,
              remove: true
            }
          }))
          console.log("false filterMask group", pages.demo.dynamicControls.buttonGroup.getText({
            enableButton: false,
            removeButton: false,
            buttonList: false,
            buttonMap: {
              enable: false,
              remove: false
            }
          }))
          console.log("mixed filterMask group", pages.demo.dynamicControls.buttonGroup.getText({
            enableButton: false,
            removeButton: true,
            buttonList: false,
            buttonMap: {
              enable: true,
              remove: false
            }
          }))
          console.log("mixed filterMask group with list", pages.demo.dynamicControls.buttonGroup.getText({
            enableButton: false,
            removeButton: true,
            buttonList: [false, false],
            buttonMap: {
              enable: true,
              remove: false
            }
          }))
          console.log("null filterMask group", pages.demo.dynamicControls.buttonGroup.getText(null))
          console.log("undefined or null filterMask group", pages.demo.dynamicControls.buttonGroup.getText({
            enableButton: undefined,
            removeButton: null,
            buttonList: undefined,
            buttonMap: null
          }))
        })
      }
    }))
  })

  testcase("list has", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          console.log("no filterMask list", pages.demo.dynamicControls.buttonList.getHasAnyText())
          console.log("true filterMask list", pages.demo.dynamicControls.buttonList.getHasAnyText(true))
          console.log("false filterMask list", pages.demo.dynamicControls.buttonList.getHasAnyText(false))
          console.log("array filterMask list", pages.demo.dynamicControls.buttonList.getHasAnyText([true, false]))
          console.log("undefined null array filterMask list",
            pages.demo.dynamicControls.buttonList.getHasAnyText([undefined, null]))
          console.log("null filterMask list", pages.demo.dynamicControls.buttonList.getHasAnyText(null))
        })
      }
    }))
  })
})