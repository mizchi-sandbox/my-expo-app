/* @flow */
import fetchStories from '../api/fetchStories'
export const UPDATE_STORIES = 'update-stories'

import type { Story } from '../types'

export type StoriesAction = {
  type: typeof UPDATE_STORIES,
  payload: Promise<Story[]>
}

export function updateStories(): StoriesAction {
  return {
    type: UPDATE_STORIES,
    payload: fetchStories()
  }
}
