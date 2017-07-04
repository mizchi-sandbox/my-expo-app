/* @flow */
import fetchStories from '../api/fetchStories'
import type { Story } from '../types'

export const UPDATE_STORIES = 'update-stories'

export type StoriesAction = {
  type: typeof UPDATE_STORIES,
  payload: Story[]
}

export async function updateStories(): Promise<StoriesAction> {
  const payload = await fetchStories()
  return {
    type: UPDATE_STORIES,
    payload
  }
}
