import React from 'react';
import {
  Alert,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  View
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
        key:0
    },
    {   
        firstName: "Carolyn",
        lastName: "Qu",
        age: 19,
        college: "Yale",
        major: "Computer Science",
        gradYear: 24,
        photoURL: "https://avatars.githubusercontent.com/u/67798872?v=4",
        key:1
    },
    {   
        firstName: "Suba",
        lastName: "Ramesh",
        age: 19,
        college: "Yale",
        major: "Computer Science",
        gradYear: 24,
        photoURL: "https://avatars.githubusercontent.com/u/18357230?v=4",
        key:2
    },
]

export default () => 
<View>
    <FlatList
            data={DUMMY_DATA}
            index={0}
            renderItem={({item}) => <Image style={{width: 200, height: 400}} source={{uri: item.photoURL}}></Image>}
    />
</View>


