import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions, TabRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import styles from "./App.components.style";
import Detail from "./screens/Detail";
import Home from "./screens/Home";
import Login from "./screens/Login";
import User from "./screens/User";
import Welcome from "./screens/Welcome";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
      <NavigationContainer>


        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              fontSize: 16,
            },
            activeTintColor: 'red',
            inactiveTintColor: 'black',
          }}

        >
          <Tab.Screen name="Login" component={Login}
            options={
              { tabBarIcon: ({ color }) => <FontAwesome name="home" size={30} color={color} /> }
            }
          />
          <Tab.Screen name="Home" component={Home}
            options={
              { tabBarIcon: ({ color }) => <FontAwesome name="bell" size={30} color={color} /> }
            }
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );



};
