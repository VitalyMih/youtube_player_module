package com.youtubeplayer.calendar

import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CounterModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "CounterModule"
    }

    @ReactMethod
    fun createCounterEvent(callback: Callback) {
        callback.invoke("Return from CounterModule")
    }
}
