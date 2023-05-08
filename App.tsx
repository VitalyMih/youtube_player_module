import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white'
  }
})

export default App
