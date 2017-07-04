/* @flow */
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Card, ListItem, Button, Text } from 'react-native-elements'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import type { ScreenProps } from '../types'
import { updateStories } from '../actions/storiesAction'

export default compose(
  connect(r => r.stories),
  lifecycle({
    async componentDidMount() {
      this.props.dispatch(updateStories())
    }
  })
)(function HNArticleList(props) {
  return (
    <ScrollView>
      {props.stories && props.stories.length
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
