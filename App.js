import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { StyleSheet } from 'react-native';
import "react-native-gesture-handler";
import AddChatScreen from "./Screens/AddChatScreen";
import ChatScreen from './Screens/ChatScreen';
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";



const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle:{backgroundColor:"#7d5fff"},
  headerTitleStyle:{color: "white"},
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="AddChat" component={AddChatScreen}/>
      <Stack.Screen name="Chat" component={ChatScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});