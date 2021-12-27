import React from 'react';
import { View, Text, Button} from 'react-native';
import useAuth from '../hooks/useAuth';
    // ES6 deconstrution operator
const LoginScreen = () => {

    const { signInWithGoogle, loading } = useAuth();

    return (
        <View>
            <Text>{ loading ? 'loading...' : "Please Login"}</Text>
            <Button title="login" onPress={signInWithGoogle}/>
        </View>
    )
}

export default LoginScreen
