import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

export default function _layout() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <Slot/>
    </GestureHandlerRootView>
  )
}