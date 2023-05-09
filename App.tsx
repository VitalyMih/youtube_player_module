import React from 'react'
import { Button, SafeAreaView, StatusBar, StyleSheet, View, NativeModules } from 'react-native'

const { CounterModule } = NativeModules

function App(): JSX.Element {
  const onPress = () => {
    CounterModule.createCounterEvent((res: String) => console.log(res))
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.container}>
        <Button title={'Press for CounterModule'} onPress={onPress} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
