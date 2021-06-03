import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { auth } from "../firebase.config";

const LoginScreen = ({ navigation }) => {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
     const unsubscribe =  auth.onAuthStateChanged((authUser) => {
          if(authUser){
              navigation.replace("Home")
          }
      });

      return unsubscribe;
  }, []);

  const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error));
};

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://images-na.ssl-images-amazon.com/images/I/A1IA1ZulCoL.png",
        }}
        style={{ width: 200, height: 200 }}
      />

      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="Password"
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button title="Login" containerStyle={styles.button} onPress={signIn} />
      <Button title="Register" type="outline" containerStyle={styles.button} onPress={() => navigation.navigate("Register")} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: 200,
    margin: 10,
  },
});
