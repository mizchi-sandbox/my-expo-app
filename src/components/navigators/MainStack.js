/* @flow */
import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Browser from '../screens/Browser'

export default StackNavigator({
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
