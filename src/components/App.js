/* @flow */
/* eslint-disable react/display-name*/
import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../store/create'
import MainTabWithNavigation from './navigators/MainTab'

export default () => {
  return (
    <Provider store={createStore()}>
      <MainTabWithNavigation />
    </Provider>
  )
}
