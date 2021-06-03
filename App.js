import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./Screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./Screens/RegisterScreen";
import HomeScreen from "./Screens/HomeScreen";



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
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});