/* @flow */
import test from 'ava'
import { updateStories } from '../storiesAction'

test('fetch HN stories', async t => {
  const ret = await updateStories()
  t.is(ret.payload.length, 10)
})
