/* @flow */
export type Story = {
  id: any,
  url: string,
  title: string
}
export type ScreenProps = {
  navigation: {
    state: {
      params: any
    },
    navigate: (string, ?Object) => void,
    goBack: any => void
  }
}
