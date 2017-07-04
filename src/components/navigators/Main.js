/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainStack from './MainStack'
import SettingsStack from './SettingsStack'
import createStore from '../../store/create'

export const Main = TabNavigator(
  {
    Main: {
      screen: MainStack,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) =>
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
      }
    },
    Settings: {
      screen: SettingsStack,
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) =>
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
)

export default () => <Provider store={createStore()}><Main /></Provider>
