/* @flow */
import test from 'ava'
import { UPDATE_STORIES } from '../../actions/storiesAction'
import stories from '../stories'

const DUMMY_STORY = {
  id: 1,
  title: 'a',
  url: 'dummy'
}

const NOP: any = {
  type: 'nop'
}

test('fetch HN stories', async t => {
  const initialState = stories(undefined, NOP)
  t.deepEqual(initialState.stories, [])
  const nextState = stories(initialState, {
    type: UPDATE_STORIES,
    payload: [DUMMY_STORY]
  })
  t.deepEqual(nextState.stories, [DUMMY_STORY])
})
