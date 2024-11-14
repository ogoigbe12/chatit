import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@/src/provider/Authprovider'

export default function AuthLayout() {
    const {user} = useAuth()

    if (user) {
        return <Redirect href={'/(home)/(tabs)'}/>
    }
  return (
    <Stack />
  )
}