/* @flow */
import React from 'react'
import { ScrollView, Text } from 'react-native'
import type { ScreenProps } from '../../types'
import HNArticleList from '../HNArticleList'

export default function News({ navigation }: ScreenProps) {
  return <HNArticleList navigation={navigation} />
}
