import { StatusBar } from "expo-status-bar";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import styles from "./App.components.style";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) => {
    // Add task
    setTaskList([...taskList, task]);
  }

  const handleDeleteTask = (index) => {
    Alert.alert(
      "Thông báo",
      "Bạn có chắc chắn muốn xóa?",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListCurrent = [...taskList];
            taskListCurrent.splice(index, 1);
            setTaskList(taskListCurrent);
          },
          style: "cancel"
        },
        { text: "Cancel", onPress: () => { } }
      ]
    );
  }
  return (

    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)} />
            })
          }
        </ScrollView>
      </View>

      <Form onAddTask={handleAddTask} />
    </View>
  );
}
