/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import Home from '../screens/Home'
import Browser from '../screens/Browser'

export const MainStack = StackNavigator({
  Home: {
    screen: Home,
    path: '/',
    navigationOptions: {
      title: 'HN Articles'
    }
  },
  Browser: {
    screen: Browser,
    path: '/browser/:url',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.url}`
    })
  }
})

export default connect(state => ({
  nav: state.mainStack
}))(function MainStackWithNavigation(props: any) {
  return (
    <MainStack
      navigation={addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav
      })}
    />
  )
})
