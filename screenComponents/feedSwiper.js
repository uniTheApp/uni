import React from 'react';
import {
  Alert,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


const { width, height } = Dimensions.get('window');

const DUMMY_DATA = [
    {   
        firstName: "Kyle",
        lastName: "Andruczk",
        age: 20,
        college: "Yale",
        major: "Psychology",
        gradYear: 24,
        photoURL: "https://avatars.githubusercontent.com/u/84470596?v=4",
    },
    {   
        firstName: "Carolyn",
        lastName: "Qu",
        age: 19,
        college: "Yale",
        major: "Computer Science",
        gradYear: 24,
        photoURL: "https://avatars.githubusercontent.com/u/67798872?v=4",
    },
    {   
        firstName: "Suba",
        lastName: "Ramesh",
        age: 19,
        college: "Yale",
        major: "Computer Science",
        gradYear: 24,
        photoURL: "https://avatars.githubusercontent.com/u/18357230?v=4",
    },
]

export default () => {
    <SwiperFlatList
        data={DUMMY_DATA}
        index={0}
        renderItem={({item}) => <Image style={{flex:1 , width: undefined, height: undefined}}  source={item.photoURL}/>}

        

/>
}
