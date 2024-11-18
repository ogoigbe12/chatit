import {  Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/lib/supbase';
import { useAuth } from '@/src/provider/Authprovider';
import UserListItem from '@/src/components/UserListItem';

export default function UsersScreen() {
    const [users, setUsers] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        const fetchUsers = async () => {
            let { data: profiles, error } = await supabase
                .from('profiles')
                .select('*')
                .neq('id',user!.id) // exclude me

            setUsers(profiles);
        }
        fetchUsers();
    }, [])
  return (
    <FlatList
    contentContainerStyle ={{gap: 5}}
    data={users}
    renderItem={({item}) => <UserListItem user={item}/>}/>
  )
}