import * as React from 'react'

import { StyleSheet, View, Text, Button } from 'react-native'
import DocumentPicker, { DocumentPickerResponse, types } from 'react-native-document-picker'

export default function App() {
  const [result, setResult] = React.useState<Array<DocumentPickerResponse> | undefined>()

  return (
    <View style={styles.container}>
      <Button
        title="open picker for single file selection"
        onPress={() => {
          DocumentPicker.pickSingle().then((result) => setResult([result]))
        }}
      />
      <Button
        title="open picker for multi file selection"
        onPress={() => {
          DocumentPicker.pickMultiple().then(setResult)
        }}
      />
      <Button
        title="open picker for multi selection of word files"
        onPress={() => {
          DocumentPicker.pick({
            allowMultiSelection: true,
            type: [types.doc, types.docx],
          }).then(setResult)
        }}
      />
      <Button
        title="open picker for single selection of pdf file"
        onPress={() => {
          DocumentPicker.pick({
            type: types.pdf,
          }).then(setResult)
        }}
      />

      <Text>Result: {JSON.stringify(result)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
})
