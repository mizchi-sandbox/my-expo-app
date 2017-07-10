/* @flow */
import { MainTab } from '../components/navigators/MainTab'

// Push initial
// const initialState = MainTab.router.getStateForAction(
//   MainTab.router.getActionForPathAndParams('/')
// )

const initialState = null

export default (state: any = initialState, action: any) => {
  // Skip back action on tab
  if (action.type === 'Navigation/BACK') {
    return state
  }
  const nextState = MainTab.router.getStateForAction(action, state)
  return nextState || state
}
