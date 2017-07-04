/* @flow */
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
// import { Text } from 'react-native'

// const MyText = () => <Text>Hello</Text>

// NOTE: Enzyme is not ready for react-native and react@16
test('should run this', t => {
  const wrapper = shallow(<h1>Hello</h1>)
  t.snapshot(toJson(wrapper))
  t.pass()
})
