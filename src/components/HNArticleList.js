/* @flow */
import React from 'react'
import { WebBrowser } from 'expo'
import { ScrollView, View } from 'react-native'
import { Card, ListItem, Button, Text } from 'react-native-elements'
import { compose, lifecycle } from 'recompose'
import type { ScreenProps } from '../types'

export default compose(
  lifecycle({
    async componentDidMount() {
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
            console.log('fetch failed', e)
          }
        })
      )
      this.setState({ stories })
    }
  })
)(function HNArticleList(props) {
  return (
    <ScrollView>
      {props.stories
        ? <Card containerStyle={{ padding: 0 }}>
            {props.stories.map(s =>
              <ListItem
                key={s.id}
                title={s.title}
                onPress={() => {
                  props.navigation.navigate('Browser', { url: s.url })
                }}
              />
            )}
          </Card>
        : <View>
            <Text>
              …
            </Text>
          </View>}
    </ScrollView>
  )
})
