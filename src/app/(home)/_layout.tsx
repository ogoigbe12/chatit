import React from 'react'
import { Redirect, Stack } from 'expo-router'
import ChatProvider from '@/src/provider/ChatProvider';
import { useAuth } from '@/src/provider/Authprovider';


export default function HomeLayout() {
  const {user} = useAuth()

    if (!user) {
        return <Redirect href={'/(auth)/login'}/>
    }
    
  return (
    
      <ChatProvider>
    <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
    </Stack>
    </ChatProvider>
    
  )
}