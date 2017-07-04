/* @flow */
import type { Story } from '../types'

export default async function fetchStories(): Promise<Story[]> {
  const res = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  )
  const storyIds = await res.json()
  const storyIdsTop10 = storyIds.slice(0, 10)

  const stories = await Promise.all(
    storyIdsTop10.map(async sid => {
      try {
        const res = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${sid}.json`
        )
        return res.json()
      } catch (e) {
        throw e
      }
    })
  )
  return stories
}
