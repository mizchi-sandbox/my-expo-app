/* @flow */
import React from 'react'
import { ScrollView, Platform } from 'react-native'
import { Text } from 'react-native-elements'
import type { ScreenProps } from '../../types'

export default function Home({ navigation }: ScreenProps) {
  return (
    <ScrollView
      style={{
        marginTop: Platform.OS === 'ios' ? 20 : 0
      }}
    >
      <Text h1>Home</Text>
    </ScrollView>
  )
}
