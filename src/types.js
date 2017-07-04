/* @flow */
export type ScreenProps = {
  navigation: {
    state: {
      params: any
    },
    navigate: (string, ?Object) => void,
    goBack: any => void
  }
}
