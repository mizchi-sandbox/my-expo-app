/* @flow */
import React from 'react'
import { Text } from 'react-native'
import type { ScreenProps } from '../../types'
import Nav from '../Nav'

export default function Profile({ navigation }: ScreenProps) {
  return <Text>{`${navigation.state.params.name}s Profile`}</Text>
}
