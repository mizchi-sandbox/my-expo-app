/* @flow */
import { combineReducers } from 'redux'
import stories from './stories'
import mainTab from './mainTab'
import mainStack from './mainStack'

export default combineReducers({
  stories,
  mainTab,
  mainStack
})
