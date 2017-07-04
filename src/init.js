/* @flow */
import config from './config'
import { Segment } from 'expo'

if (config.segmentIOSWriteKey) {
  Segment.initializeIOS(config.segmentIOSWriteKey)
  Segment.trackWithProperties('Booted', {})
}
