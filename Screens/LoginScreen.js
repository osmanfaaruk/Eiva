import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";

const LoginScreen = ({ navigation }) => {
  const signIn = () => {};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          autoFocus
          type="Password"
          onChangeText={(text) => setPassword(text)}
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
