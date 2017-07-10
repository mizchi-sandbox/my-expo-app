/* @flow */
/* eslint-disable react/display-name*/
import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../store/create'
import MainTab from './navigators/MainTab'

export default () => {
  return (
    <Provider store={createStore()}>
      <MainTab />
    </Provider>
  )
}
