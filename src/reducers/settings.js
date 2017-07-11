/* @flow */
import {
  RESET,
  LOAD,
  TURN_ON,
  TURN_OFF,
  SET_SLIDE_VALUE,
  SET_INPUT_VALUE
} from '../actions/settingsAction'
import type { Action } from '../actions/settingsAction'

export type State = {
  slideValue: number,
  inputValue: string,
  isActive: boolean
}

export const initialState: State = {
  slideValue: 0,
  inputValue: '',
  isActive: false
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case RESET:
      return action.payload
    case LOAD:
      return action.payload
    case TURN_ON:
      return { ...state, isActive: true }
    case TURN_OFF:
      return { ...state, isActive: false }
    case SET_SLIDE_VALUE:
      return { ...state, slideValue: action.payload }
    case SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload }
    default:
      return state
  }
}
