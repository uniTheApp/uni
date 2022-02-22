import React from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  View,
  SafeAreaView,
} from 'react-native';
import tw from "tailwind-rn";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, useRef, useCallback } from 'react/cjs/react.development';
import { collection, doc, onSnapshot, setDoc, query, where, getDocs, getDoc, DocumentSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from "../firebase"
import Carousel from './Carousel';
import useAuth from '../hooks/useAuth'
import generateId from '../lib/generateId';
import { useNavigation } from '@react-navigation/native'




const FeedSwiper = () => {

    // set default vals for the profiles and swipes, get the authed user
    const [profiles, setProfiles] = useState([]);
    const {user} = useAuth();
    const swipeRef = useRef(null)

    const navigation = useNavigation();


    // Get the cards from the db, store the objs in the profiles array
    useEffect(() => {
        let unsub;

        const fetchCards = async () => {
            
            const passes = await getDocs(collection(db, 'users', user.uid, 'rendered')).then(
                (snapshot) => snapshot.docs.map((doc) => doc.id)
            );



            const passedUserIds = passes.length > 0 ? passes : ['test'];

            console.log([...passedUserIds])


            // console.log("the user is " + user)

            unsub = onSnapshot(query(collection(db, "users"), where('userId', 'not-in', [...passedUserIds])), snapshot => {
            // unsub = onSnapshot(collection(db, "users"), snapshot => {
                setProfiles(
                    snapshot.docs.filter(doc => doc.id !== user.uid).map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                )
            })
        }
        fetchCards();
        return unsub
    }, [db])

    // MATCHING HELPER FUNCTIONS
    const like = async (postIndex) => {
        if (!profiles[postIndex]) return;
        console.log(`post index: ${profiles[postIndex].userId}`)
        let userLiked = profiles[postIndex]
        console.log(`${user.uid} likes ${userLiked.firstName} ${userLiked.userId} ${userLiked}`)

        const loggedInProfile = await ( await getDoc(doc(db, 'users', user.uid))).data()

        // console.log(`full data: ${loggedInProfiler}`)

        console.log("test")


        // check if user liked you

        getDoc(doc(db, 'users', userLiked.id, 'likes', user.uid)).then(
            (documentSnapshot) => {
                if (documentSnapshot.exists()) {
                    // user has liked you before you liked them
                    // create a MATCH

                    setDoc(doc(db, 'users', user.uid, 'likes', userLiked.userId), userLiked)

                    console.log((`Matched with ${userLiked.id}`))
                    console.log(`New ID: ${generateId(user.userid, userLiked.id)}`)

                    // create the match
                    setDoc(doc(db, 'matches', generateId(user.uid, userLiked.id)), {
                        users: {
                            [user.uid]: loggedInProfile,
                            [userLiked.id]: userLiked
                        },
                        usersMatched: [user.uid, userLiked.id],
                        timestamp: serverTimestamp(),
                    })


                    navigation.navigate("Match", {
                        loggedInProfile,
                        userLiked,
                    })




                } else {
                    // user is the first to like or didn't get swiped on 

                    setDoc(doc(db, 'users', user.uid, 'likes', userLiked.userId), userLiked)
                    
                }
            })

    }

    const noMatch = async (index) => {
        if (!profiles[index]) return;

        const userNotMatched = profiles[index]
        console.log(`You did not match with ${userNotMatched.firstName}`)
        
        setDoc(doc(db, 'users', user.userId, 'passes', userNotMatched.id))
    };

    // set the users that have been rendered in the feed in db
    const onViewableItemsChangedHandler = useCallback(
        ({viewableItems}) => {

            if (viewableItems && viewableItems.length !== 0) {
                setDoc(doc(db, 'users', user.uid, 'rendered', viewableItems[0].item.id), viewableItems[0].item)

                }
        },
        [],
    )
    // END MATCHING HELPER FUNCTIONS 



     return (
     
    <SafeAreaView>
        {/* main flatist of profiles */}
        <FlatList
            data={profiles}
            index={0}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').height - 163}
            snapToAlignment="start"
            decelerationRate={"fast"}
            onViewableItemsChanged={onViewableItemsChangedHandler}
            contentContainerStyle={{ paddingBottom: "45%" }}
            renderItem={({item, index}) => item ? (
                <View>
                    {/* 2nd header */}
                    <View>
                        <View>
                            <Text style={styles.imgCardText}>{item.firstName} - {item.college} '{item.gradYear}</Text>
                            <Text style={styles.imgCardTextAlt}>{item.age} years old</Text>
                        </View>
                        <TouchableOpacity style={tw("absolute right-4 top-4")}>
                            <Entypo name="dots-three-vertical" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    {/* end 2nd header */}
                
                    {/* Images */}
                    <Carousel data={item.photos}></Carousel>
                    {/* end images */}


                    {/* Bottom more info */}
                    <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.9)']}
                                style={tw("absolute bottom-0 h-24 w-full")}
                            >
                        <TouchableOpacity style={tw("absolute bottom-0 h-24  w-full")}>
                            <View style={tw("")}>
                            <Entypo name="chevron-right" size={24} color="white" style={{position: "absolute", marginTop: "10%", marginLeft: "27%"}} />
                            <Text style={{color: "white", marginTop: "10.4%", position: "absolute", marginLeft: "37%", fontSize: 18}}>Lorem Ipsum</Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                    {/* end bottom more info */}
                

                    
                    {/* buttons */}
                    <TouchableOpacity style={tw("absolute bottom-36 right-2 bg-white rounded-full")}>
                            <Feather name="send" size={26} color="#B8EFFF" style={styles.cardButton} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw("absolute bottom-20 right-2 bg-white rounded-full")} onPress={() => like(index)}>
                            <AntDesign name="hearto" size={26} color="#B8EFFF" style={styles.cardButton} />
                    </TouchableOpacity>
                    {/* end buttons */}


                </View>
                
            
            ) : (

                <Text>No more profiles</Text>


            )}
            
        />

    </SafeAreaView>
)}


// local style sheet

const styles = StyleSheet.create({
    headerText: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: "Chivo-Regular"
    },
    headerLine: {
        borderBottomColor: "#9C9C9C",
        borderBottomWidth: 1, 
        marginTop: 10,
        marginLeft: 9,
        marginRight: 9,
    },
    imgCard: {
        marginTop: -59,
        height: "90%",
        marginLeft: -20,
        width: '112%',
        backgroundColor: "white"

    },
    imgCardText : {
        fontFamily: "Chivo-Regular",
        fontSize: 24,
        marginTop: 12,
        marginLeft: 9

    },
    imgCardTextAlt : {
        fontFamily: "Chivo-Regular",
        fontSize: 18,
        color: "#939393",
        marginBottom: 9,
        marginLeft: 9

    },
    cardButton: {
        margin: 10,
    },

})

export default FeedSwiper;