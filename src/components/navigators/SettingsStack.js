/* @flow */
import { StackNavigator } from 'react-navigation'
import Settings from '../screens/Settings'

export default StackNavigator({
  Settings: {
    screen: Settings,
    path: '/',
    navigationOptions: () => ({
      title: 'Settings'
    })
  }
})
