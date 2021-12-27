import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, KeyboardAvoidingView, secureTextEntry, StyleSheet, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import useAuth from '../hooks/useAuth';
    // ES6 deconstrution operator
const LoginScreen = () => {

    const { signInWithGoogle, loading } = useAuth();
    const navigation = useNavigation()
    




    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
            {/* header */}
            {/* <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Sign in</Text>
            </TouchableOpacity> */}


            {/* end header */}

            {/* body */}

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    // value={} 
                    // onChangeText={text => }
                    style = {styles.input}
                >
                </TextInput>
                <TextInput
                    placeholder="Password"
                    // value={} 
                    // onChangeText={text => }
                    style = {styles.input}
                    secureTextEntry
                >
                </TextInput>

            </View>


            {/* end body */}

            <Text>{ loading ? 'loading...' : "Please Login"}</Text>
            <Button title="login" onPress={signInWithGoogle}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})