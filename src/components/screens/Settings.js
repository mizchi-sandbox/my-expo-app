/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, Slider, Switch, TextInput } from 'react-native'
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
      <Text>
        Slider: {props.settings.slideValue}
      </Text>
      <Divider />
      <Slider
        style={{ width: 300 }}
        step={1}
        minimumValue={0}
        maximumValue={10}
        value={props.settings.slideValue}
        onValueChange={val => console.log('slider:slide', val)}
        onSlidingComplete={val => dispatch(settingsAction.setSlideValue(val))}
      />
      <Text>
        Switch: {props.settings.isActive ? 'on' : 'off'}
      </Text>
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
      <Text>Input Field</Text>
      <TextInput
        value={props.settings.inputValue}
        style={{ height: 40 }}
        placeholder="Type here"
        onChangeText={text => dispatch(settingsAction.setInputValue(text))}
      />

      <Button title="Reset" onPress={() => dispatch(settingsAction.reset())} />
    </ScrollView>
  )
})
