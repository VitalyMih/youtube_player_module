import React, { useState } from 'react'
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import NativePlayer from './NativePlayer'

const videoIds = [
  'hQdp7rN6vUs',
  'wsX7ppKx13k',
  'dpw9EHDh2bM',
  'th9oAxkJyiE',
  'gvkqT_Uoahw',
  'Xs6_vecSv2Y'
]
function App(): JSX.Element {
  const [videoId, setVideoId] = useState(videoIds[0])

  const onPress = () => {
    const filteredIds = videoIds.filter((id) => id !== videoId)
    const index = Math.floor(Math.random() * (filteredIds.length - 1))
    setVideoId(filteredIds[index])
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.container}>
        <Button title={'Change Video'} onPress={onPress} />
        {Platform.OS === 'android' && <NativePlayer videoId={videoId} />}
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
