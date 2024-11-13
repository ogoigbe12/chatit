import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Channel, ChannelList, MessageInput, MessageList } from 'stream-chat-expo'
import { Channel as ChannelType, StreamChat } from 'stream-chat';
import { router } from 'expo-router';

export default function MainTabScreen() {
    // const [channel, setChannel] = useState()
  
        
    return <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)}/>
  
}