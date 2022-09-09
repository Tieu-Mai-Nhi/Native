import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Detail = ({ navigation, route }) => {                   // lấy tham số từ màn hình Home
    return (
        <View>
            <Text>Detail</Text>
            <Text>{route.params.count}</Text>
            {/* in ra tham số được truyền từ màn Home */}
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})