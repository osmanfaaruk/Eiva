import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, StatusBar, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase.config";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() =>{
            navigation.setOptions({
                headerBackTitle:"Back To Login",
            });
    }, [navigation])


  const register = () => {
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
            authUser.user.updateProfile({
                displayName:name,
                photoURL:imageUrl || "https://image.freepik.com/free-vector/angry-bearded-man-vector_83738-280.jpg",
            });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h4 stye={{ marginBottom: 100 }}>
        Register To Eiva
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Image (Optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button raised onPress={register} title="Register" containerStyle={styles.button} />
      <View style={{height:100}}/>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button:{
      width:200,
      marginTop:10,
  },
  inputContainer:{
    width:300
  }
});
