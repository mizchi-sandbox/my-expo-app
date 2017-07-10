/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import News from '../screens/News'
import Browser from '../screens/Browser'

export const NewsStack = StackNavigator({
  Top: {
    screen: News,
    path: '/news/top',
    navigationOptions: {
      title: 'HN:News'
    }
  },
  Browser: {
    screen: Browser,
    path: '/news/browser/:url',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.url}`
    })
  }
})

export default connect(state => ({
  nav: state.nav.newsStack
}))(function NewsStackWithNavigation(props: any) {
  return (
    <NewsStack
      navigation={addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav
      })}
    />
  )
})
