import { useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import styles from "./App.components.style";

export default function App() {
  const listData = [
    {
      title: "HP gaming",
      price: 400,
      img: "https://laptoptcc.com/wp-content/uploads/2021/04/AZZ02208-DELL-PRECISION-5510-LAPTOPTCC-1-1.jpg",
    },
    {
      title: "HP gaming",
      price: 400,
      img: "https://laptoptcc.com/wp-content/uploads/2021/04/AZZ02208-DELL-PRECISION-5510-LAPTOPTCC-1-1.jpg",
    },
    {
      title: "HP gaming",
      price: 400,
      img: "https://laptoptcc.com/wp-content/uploads/2021/04/AZZ02208-DELL-PRECISION-5510-LAPTOPTCC-1-1.jpg",
    },
    {
      title: "HP gaming",
      price: 400,
      img: "https://laptoptcc.com/wp-content/uploads/2021/04/AZZ02208-DELL-PRECISION-5510-LAPTOPTCC-1-1.jpg",
    },
  ];

  const [listItem, setListItem] = useState(listData);

  const ItemView = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.price}</Text>
        <Image style={styles.img} source={{
          uri: `${item.img}`
        }}></Image>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listItem}
        renderItem={ItemView}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
