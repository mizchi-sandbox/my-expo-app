/* @flow */
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducer from '../reducers'

export default (initialState: any = undefined) => {
  return createStore(reducer, initialState, applyMiddleware(promiseMiddleware))
}
