import { View, Text, ActivityIndicator } from 'react-native'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { StreamChat } from 'stream-chat';
import {OverlayProvider, Chat} from 'stream-chat-expo'
import { useAuth } from './Authprovider';
import { supabase } from '../lib/supbase';


const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY); 

export default function ChatProvider({children}: PropsWithChildren) {
    const [isReady, setIsReady] = useState(false);
    const { profile}= useAuth();

    useEffect(() => {
      // console.log('USE EFFECT:', profile);
      if (!profile) {
        return;
      }
        const connect = async () => {
           await client.connectUser(
               {
                 id: profile.id,
                 name: profile.full_name,
                 image: supabase.storage.from('avatars').getPublicUrl(profile.avatar_url).data.publicUrl,
               },
               client.devToken(profile.id)
             ); 
             setIsReady(true); 
                  
       } 
       connect();
       
       return () => {
        if (isReady){

          client.disconnectUser();
        }
        setIsReady(false)
       }
       }, [profile?.id])

       if (!isReady) {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator/>
        </View>
    )
       }

  return (
    <OverlayProvider>
        <Chat client={client}>
    {children}
    </Chat>
    </OverlayProvider>
  )
}