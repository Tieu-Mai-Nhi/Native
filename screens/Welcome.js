import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/manchester-united.png')} style={styles.image} />
                    <Text style={styles.text}>Mu.com</Text>
                </View>
                <Image source={require('../assets/trophy.png')} style={styles.trophy} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },

    text: {
        color: 'black',
        fontSize: 24,
    },

    image: {
        width: 60,
        height: 60,
        marginHorizontal: 12,
    },

    header: {
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        justifyContent: "space-between",
    },

    trophy: {
        width: 40,
        height: 40,
        marginHorizontal: 12
    }
})