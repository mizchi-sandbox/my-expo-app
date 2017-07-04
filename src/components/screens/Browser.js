/* @flow */
import React from 'react'
import { WebView, ScrollView } from 'react-native'
import type { ScreenProps } from '../../types'

export default function Browser({ navigation }: ScreenProps) {
  const uri = navigation.state.params.url
  return (
    <WebView
      source={{
        uri
      }}
      startInLoadingState
      javaScriptEnabled
      style={{ flex: 1 }}
    />
  )
}
