import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react/cjs/react.development';
import { TwitterAuthProvider } from 'firebase/auth'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn'
import useAuth from '../hooks/useAuth'
import getMatchedUserInfo from '../lib/getMatchedUserInfo'

const ChatRow = ({matchDetails}) => {
    const navigation = useNavigation();
    const {user} = useAuth();

    const [matchedUserInfo, setMatchedUserInfo] = useState(null)

    console.log("matches: ")
    console.log(matchDetails.firstName)

    useEffect(() => {
        setMatchedUserInfo(matchDetails)
    }, [matchDetails, user])

    console.log("matchedUserInfo")
    console.log(matchedUserInfo)

    return (
        <TouchableOpacity
            style={tw(
                "flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg"
            )}
            onPress={() => navigation.navigate("Message", {
                matchDetails
            })}
        >
            <Image
                style={tw("rounded-full h-16 w-16 mr-4")}
                source={{ uri: matchedUserInfo?.photoURL}}
            />
            <View>
                <Text style={tw("text-lg font-semibold")}>
                    {matchedUserInfo?.firstName}
                </Text>
                <Text>{"Say Hi!"}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ChatRow
