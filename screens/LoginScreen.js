import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, Button, SafeAreaView} from 'react-native';
import useAuth from '../hooks/useAuth';
    // ES6 deconstrution operator
const LoginScreen = () => {

    const { signInWithGoogle, loading } = useAuth();
    const navigation = useNavigation()


    return (
        <SafeAreaView>
            {/* header */}



            {/* end header */}
            <Text>{ loading ? 'loading...' : "Please Login"}</Text>
            <Button title="login" onPress={signInWithGoogle}/>
        </SafeAreaView>
    )
}

export default LoginScreen
