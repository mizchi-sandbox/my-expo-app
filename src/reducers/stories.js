/* @flow */
import { UPDATE_STORIES } from '../actions/storiesAction'
import type { StoriesAction } from '../actions/storiesAction'
import type { Story } from '../types'

export type State = {
  stories: Story[]
}

const initialState: State = {
  stories: []
}

export default (state: State = initialState, action: StoriesAction): State => {
  switch (action.type) {
    case UPDATE_STORIES:
      return { stories: action.payload }
    default:
      return state
  }
}
