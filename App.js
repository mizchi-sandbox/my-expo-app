/* @flow */
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-elements'

type ScreenProps = {
  navigation: {
    state: {
      params: any
    },
    navigate: (string, ?Object) => void,
    goBack: any => void
  }
}

const Nav = ({ navigation, banner }) =>
  <ScrollView>
    <Text style={{ padding: 10 }}>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
      title="Open profile screen"
    />
    <Button
      onPress={() => navigation.navigate('NotifSettings')}
      title="Open notifications screen"
    />
    <Button
      onPress={() => navigation.navigate('SettingsTab')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>

const Home = ({ navigation }: ScreenProps) =>
  <Nav banner="Home Screen" navigation={navigation} />

const Profile = ({ navigation }: ScreenProps) =>
  <Nav
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />

const NotificationSettings = ({ navigation }: ScreenProps) =>
  <Nav banner="Notifications Screen" navigation={navigation} />

const Settings = ({ navigation }: ScreenProps) => <Text>Settings</Text>

const MainTab = StackNavigator({
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

const SettingsTab = StackNavigator({
  Settings: {
    screen: Settings,
    path: '/',
    navigationOptions: () => ({
      title: 'Settings'
    })
  },
  NotifSettings: {
    screen: NotificationSettings,
    navigationOptions: {
      title: 'Notifications'
    }
  }
})

const App = TabNavigator(
  {
    Main: {
      screen: MainTab,
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
      screen: SettingsTab,
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

export default App
