import React from "react";
import { Navigation } from "react-native-navigation";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.login_container}>
        <Text style={styles.title}> Login Page </Text>

        <View style={styles.options}>
          <Button
            styles={styles.button}
            title="Sign Up"
            color="#841584"
            accessibilityLabel="Sign Up"> 
            </Button>
        </View>

        <View style={styles.options}>
          <Button
            styles={styles.button}
            title="Login"
            accessibilityLabel="Login"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login_container: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#FCCF00"
  },

  title: {
    height: "80%",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "left"
  },

  options: {
    backgroundColor: "red",
    height: "10%"
  }
});
