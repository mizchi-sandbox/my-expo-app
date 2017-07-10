/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { ScrollView, ActivityIndicator, StyleSheet } from 'react-native'
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
  const loaded = props.stories && props.stories.length
  if (!loaded) {
    return (
      <ActivityIndicator animating={true} style={styles.loader} size="large" />
    )
  } else {
    return (
      <ScrollView>
        <Card containerStyle={{ padding: 0 }}>
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
      </ScrollView>
    )
  }
})

const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
})
