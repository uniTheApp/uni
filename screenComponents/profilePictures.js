import React from 'react';
import {
  Alert,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  View,
  SafeAreaView,
} from 'react-native';
import tw from "tailwind-rn";




const profilePictures = () => {

    const DUMMY_DATA = 
    {   
        firstName: "Carolyn",
        age: 19,
        college: "Yale",
        major: "Computer Science",
        gradYear: 24,
        photo1: "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/212565051_4368692719855656_5676335252591179243_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=6wzMrkevJy8AX8EQRWV&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_yS5MCrVpuxLjDQktiHsrJse_2mWLQR42um8yNPP0UAw&oe=61D9039D&_nc_sid=4f375e",
        photo2: "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/210580876_501234684307287_1251229545637267653_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=BEfOW6uQbK4AX_MgDkR&tn=3zXADCTqIs4ixcjw&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT9RrkDk6jjWY6KGAO7ydkpgqafAWpvcx9QpX4wIo_QTrw&oe=61D89993&_nc_sid=4f375e",
        photo3: "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/210533860_182228660540862_3331632285557765889_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=y2ZqkX2J9EEAX9WGcSP&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-9qyjD-etYbiuLp1KMXf4nPGVswNiGPAoVKfZ0i80DnA&oe=61D91A34&_nc_sid=4f375e",
        key:0
    }

    return (
        <SafeAreaView>

            

            style={tw("mb-32")}

            {/* data = {DUMMY_DATA} */}
            {/*Static Name and College*/}

            
            {/* <Text style={styles.topText}> 
                {DUMMY_DATA.firstName} 
            </Text> */}
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    topText: {
        textAlign: "center",
        // fontFamily: "OpenSans-SemiBold"
    }

})

export default profilePictures
