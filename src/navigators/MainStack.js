/* @flow */
import { StackNavigator } from 'react-navigation'
import Home from '../components/screens/Home'
import Profile from '../components/screens/Profile'

export default StackNavigator({
  Home: {
    screen: Home,
    path: '/',
    navigationOptions: {
      title: 'Home'
    }
  },
  Profile: {
    screen: Profile,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile!`
    })
  }
})
