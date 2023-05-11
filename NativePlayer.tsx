import React, { memo } from 'react'
import { requireNativeComponent, StyleSheet } from 'react-native'

const YouTubePlayer = requireNativeComponent('YouTubePlayer')

const NativePlayer = ({ videoId }: { videoId: string }) => (
  <YouTubePlayer style={styles.player} videoId={videoId} />
)

const styles = StyleSheet.create({
  player: {
    width: '100%',
    height: 250,
    marginTop: 16
  }
})

export default memo(NativePlayer)
