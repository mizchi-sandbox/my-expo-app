/* @flow */
import { Segment } from 'expo'
import config from './config'

if (config.segmentIOSWriteKey) {
  Segment.initializeIOS(config.segmentIOSWriteKey)
  Segment.trackWithProperties('Booted', {})
}
