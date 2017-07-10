/* @flow */
import { NewsStack } from '../components/navigators/NewsStack'

// Push initial
// const initialState = MainTab.router.getStateForAction(
//   MainTab.router.getActionForPathAndParams('/')
// )

const initialState = null

export default (state: any = initialState, action: any) => {
  const nextState = NewsStack.router.getStateForAction(action, state)
  return nextState || state
}
