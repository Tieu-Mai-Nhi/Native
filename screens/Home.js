import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, color: 'red' }}>Home Screen</Text>
            <Button
                title="Click to detail page"
                onPress={() => {
                    navigation.navigate('Detail', {
                        id: 1,
                        count: 10,  // truyền tham số cho màn hình Detail
                    });
                }}
            />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})