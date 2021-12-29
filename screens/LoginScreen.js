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
    
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered: ',user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signinWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ', user.email);
        })
        .catch(error => alert(error.message))
    }

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
                    value={email} 
                    onChangeText={text => setEmail(text)}
                    style = {styles.input}
                >
                </TextInput>
                <TextInput
                    placeholder="Password"
                    value={password} 
                    onChangeText={text => setPassword(text)}
                    style = {styles.input}
                    secureTextEntry
                >
                </TextInput>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.button}>Login</Text>

                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>

                </TouchableOpacity>

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