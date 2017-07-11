/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import styled from 'styled-components/native'
import { ScrollView, ActivityIndicator } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { updateStories } from '../actions/storiesAction'

const StyledLoader = styled.View`
  alignItems: center;
  justifyContent: center;
  padding: 8px;
`

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
      <StyledLoader>
        <ActivityIndicator animating={true} size="large" />
      </StyledLoader>
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
