/* @flow */
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import type { ScreenProps } from '../types'

export default function Nav({
  navigation,
  banner
}: ScreenProps & { banner: string }) {
  return (
    <ScrollView>
      <Text style={{ padding: 10 }}>{banner}</Text>
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
        title="Open profile screen"
      />
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Go to settings tab"
      />
    </ScrollView>
  )
}
