package com.youtubeplayer.modules

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView

class YouTubePlayer: SimpleViewManager<YouTubePlayerView>() {
    private var player: YouTubePlayer? = null
    private var videoId: String? = null

    override fun getName(): String {
        return "YouTubePlayer"
    }

    @ReactProp(name = "videoId")
    fun setVideoId(view: YouTubePlayerView, newId: String?) {
        if (newId == null || newId == videoId) return
        videoId = newId
        player?.loadVideo(newId, 0f)
    }

    override fun createViewInstance(reactContext: ThemedReactContext): YouTubePlayerView {
        val playerView = YouTubePlayerView(reactContext)
        playerView.enableAutomaticInitialization = false
        playerView.initialize(object: AbstractYouTubePlayerListener() {
            override fun onReady(youTubePlayer: YouTubePlayer) {
                super.onReady(youTubePlayer)
                player = youTubePlayer
            }
        }, false)
        return playerView
    }
}