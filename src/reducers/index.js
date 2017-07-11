/* @flow */
import { combineReducers } from 'redux'
import stories from './stories'
import settings from './settings'
import mainTab from './mainTab'
import newsStack from './newsStack'

export default combineReducers({
  stories,
  settings,
  nav: combineReducers({
    mainTab,
    newsStack
  })
})
