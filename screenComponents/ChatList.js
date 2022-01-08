import React from 'react'
import {View , Text, FlatList} from 'react-native'
import tw from 'tailwind-rn'
import { useState, useEffect } from 'react/cjs/react.development';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import {db} from "../firebase"
import ChatRow from './ChatRow';
import useAuth from '../hooks/useAuth';

const ChatList = () => {
    const [matches, setMatches] = useState([])
    const {user} = useAuth();

    useEffect(() => {
        onSnapshot(collection(db, "users"), snapshot => {
            setMatches(
                snapshot.docs.filter(doc => doc.id !== user.uid).map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            )
        })
    }, [])

    return (
        matches.length > 0 ? (
            <View style={tw("h-full")}>
                <FlatList
                    data={matches}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ChatRow matchDetails={item}/>}
                />
            </View>
        ) : (
            <View style={tw("p-5")}>
                <Text>No matches :(</Text>
            </View>
        )
    )
}

export default ChatList