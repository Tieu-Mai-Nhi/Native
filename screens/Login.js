import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    return (
        <View>
            <Text>Login</Text>
            <Button
                title="Login"
                onPress={() => {
                    navigation.replace('Home');
                }}
            />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})