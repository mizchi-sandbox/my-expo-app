/* @flow */
import { combineReducers } from 'redux'
import stories from './stories'
import mainTab from './mainTab'

export default combineReducers({
  stories,
  mainTab
})
