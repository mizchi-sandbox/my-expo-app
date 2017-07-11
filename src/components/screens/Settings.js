/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  Slider,
  Switch,
  TextInput,
  Alert,
  View,
  Platform
} from 'react-native'
import { Text, Button, Divider } from 'react-native-elements'
import { compose, lifecycle } from 'recompose'
import * as settingsAction from '../../actions/settingsAction'
import type { ScreenProps } from '../../types'

export default compose(
  connect(state => ({ settings: state.settings })),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(settingsAction.load())
    }
  })
)(function Settings(props: ScreenProps & { settings: any, dispatch: any }) {
  console.log('render settings')
  const dispatch = props.dispatch
  return (
    <ScrollView>
      <SettingsItem>
        <SettingsItemTitle>
          Slider: {props.settings.slideValue}
        </SettingsItemTitle>
        <Slider
          style={{ width: 300 }}
          step={1}
          minimumValue={0}
          maximumValue={10}
          value={props.settings.slideValue}
          onValueChange={val => console.log('slider:slide', val)}
          onSlidingComplete={val => dispatch(settingsAction.setSlideValue(val))}
        />
      </SettingsItem>
      <SettingsItem>
        <SettingsItemTitle>
          Switch: {props.settings.isActive ? 'on' : 'off'}
        </SettingsItemTitle>
        <Switch
          value={props.settings.isActive}
          onValueChange={val => {
            if (val) {
              props.dispatch(settingsAction.turnOn())
            } else {
              props.dispatch(settingsAction.turnOff())
            }
          }}
        />
      </SettingsItem>
      <SettingsItem>
        <SettingsItemTitle>
          <Text>Input Field</Text>
        </SettingsItemTitle>
        <TextInput
          value={props.settings.inputValue}
          style={{ height: 40 }}
          placeholder="Type here"
          onChangeText={text => dispatch(settingsAction.setInputValue(text))}
        />
      </SettingsItem>

      <SettingsItem>
        <Button
          title="Reset"
          onPress={() => {
            // Works on both iOS and Android
            Alert.alert(
              'CAUTION!',
              'You are going to reset settings.',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                  onPress: () => console.log('Cancel Pressed')
                },
                {
                  text: 'OK',
                  style: Platform.OS === 'ios' ? 'destructive' : 'negative',
                  onPress: () => {
                    dispatch(settingsAction.reset())
                  }
                }
              ],
              { cancelable: false }
            )
          }}
        />
      </SettingsItem>
    </ScrollView>
  )
})

function SettingsItem(props: any) {
  return (
    <View style={{ padding: 4 }}>
      <View
        style={{
          margin: 3,
          padding: 3,
          borderRadius: 4,
          borderWidth: 1,
          backgroundColor: '#fff',
          borderColor: '#ddd'
        }}
      >
        {props.children}
      </View>
    </View>
  )
}

function SettingsItemTitle(props: any) {
  return (
    <Text
      style={{
        paddingBottom: 3,
        fontSize: 18
      }}
    >
      {props.children}
    </Text>
  )
}
