/* @flow */
import test from 'ava'
import { updateStories } from '../storiesAction'

test('fetch HN stories', async t => {
  const action = updateStories()
  const ret = await action.payload
  t.is(ret.length, 10)
})
