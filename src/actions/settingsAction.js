/* @flow */
import { AsyncStorage } from 'react-native'
import type { State as SettingsState } from '../reducers/settings'

export const RESET = 'settings/reset'
export const LOAD = 'settings/load'
export const TURN_ON = 'settings/turn-on'
export const TURN_OFF = 'settings/turn-off'
export const SET_SLIDE_VALUE = 'settings/set-slide-value'
export const SET_INPUT_VALUE = 'settings/set-input-value'

export type ResetAction = {
  type: typeof RESET,
  payload: SettingsState
}

export type LoadAction = {
  type: typeof LOAD,
  payload: SettingsState
}

export type TurnOnAction = {
  type: typeof TURN_ON
}

export type TurnOffAction = {
  type: typeof TURN_OFF
}

export type SetSlideValueAction = {
  type: typeof SET_SLIDE_VALUE,
  payload: number
}

export type SetInputValueAction = {
  type: typeof SET_INPUT_VALUE,
  payload: string
}

export type Action =
  | ResetAction
  | LoadAction
  | TurnOnAction
  | TurnOffAction
  | SetSlideValueAction
  | SetInputValueAction

export async function reset(): Promise<ResetAction> {
  // await AsyncStorage.clear()
  return {
    type: RESET,
    payload: {
      isActive: false,
      inputValue: '',
      slideValue: 0
    }
  }
}

export async function load(): Promise<LoadAction> {
  const isActive = (await AsyncStorage.getItem('isActive')) === 'on'
  const slideValue = parseInt(await AsyncStorage.getItem('slideValue'), 10) || 0
  const inputValue = (await AsyncStorage.getItem('inputValue')) || ''
  return {
    type: LOAD,
    payload: {
      isActive,
      inputValue,
      slideValue
    }
  }
}

export async function turnOn(): Promise<TurnOnAction> {
  await AsyncStorage.setItem('isActive', 'on')
  return {
    type: TURN_ON
  }
}

export async function turnOff(): Promise<TurnOffAction> {
  await AsyncStorage.setItem('isActive', 'off')
  return {
    type: TURN_OFF
  }
}

export async function setSlideValue(
  slideValue: number
): Promise<SetSlideValueAction> {
  await AsyncStorage.setItem('slideValue', slideValue.toString())
  return {
    type: SET_SLIDE_VALUE,
    payload: slideValue
  }
}

export async function setInputValue(
  inputValue: string
): Promise<SetInputValueAction> {
  await AsyncStorage.setItem('inputValue', inputValue)
  return {
    type: SET_INPUT_VALUE,
    payload: inputValue
  }
}
