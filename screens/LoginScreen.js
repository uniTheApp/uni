import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, Button, SafeAreaView, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import useAuth from '../hooks/useAuth';
    // ES6 deconstrution operator
const LoginScreen = () => {

    const { signInWithGoogle, loading } = useAuth();
    const navigation = useNavigation()


    return (
        <SafeAreaView>
            {/* header */}
            {/* <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Sign in</Text>
            </TouchableOpacity> */}


            {/* end header */}
            <Text>{ loading ? 'loading...' : "Please Login"}</Text>
            <Button title="login" onPress={signInWithGoogle}/>
        </SafeAreaView>
    )
}

export default LoginScreen
