/* @flow */
import React from 'react'
import type { ScreenProps } from '../../types'
import Nav from '../Nav'

export default function Home({ navigation }: ScreenProps) {
  return <Nav banner="Home Screen" navigation={navigation} />
}
