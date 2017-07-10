/* @flow */
import MainTab from '../components/navigators/MainTab'

const initialState = MainTab.router.getStateForAction(
  MainTab.router.getActionForPathAndParams('/')
)

export default (state: any = initialState, action: any) => {
  const nextState = MainTab.router.getStateForAction(action, state)
  return nextState || state
}
