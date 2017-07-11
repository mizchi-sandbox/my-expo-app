/* @flow */
import React from 'react'
import type { ScreenProps } from '../../types'
import HNArticleList from '../HNArticleList'

export default function News({ navigation }: ScreenProps) {
  return <HNArticleList navigation={navigation} />
}
