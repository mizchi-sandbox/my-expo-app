/* @flow */
import { MainStack } from '../components/navigators/MainStack'

// Push initial
// const initialState = MainTab.router.getStateForAction(
//   MainTab.router.getActionForPathAndParams('/')
// )

const initialState = null

export default (state: any = initialState, action: any) => {
  const nextState = MainStack.router.getStateForAction(action, state)
  return nextState || state
}
