/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { ScrollView, View } from 'react-native'
import { Card, ListItem, Text } from 'react-native-elements'
import { updateStories } from '../actions/storiesAction'

export default compose(
  connect(r => r.stories),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(updateStories())
    }
  })
)(function HNArticleList(props: any) {
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
            <Text>…</Text>
          </View>}
    </ScrollView>
  )
})
