import React from "react";

import {
  StyleSheet,
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import InputBox from '../components/textInput';

export default class SignUp extends React.Component {
  state = {
    user_email: 'bobatea123@gmail.com',
    password: '',
  };

  render() {
    const title1 = '<SIGN'
    const title2 = 'UP>'
    const title3 = `${title1}` + ' ' + `${title2}`;;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {title3} </Text>
        <Text style={styles.subText}> Gotta Lotta Bubble tea!</Text>


        <Image
          style={styles.logo}
          source={require("../assets/boba_tea_logo.png")}
        />
        <KeyboardAvoidingView behavior="padding" enabled>
    
          <Text style={styles.labels}> First Name </Text>
          <InputBox
            placeholder="Enter your First Name"
            autoCompleteType="name"
            textContentType="name"
            keyboardAppearance="dark"
            defaultValue={this.state.password}
            clearButtonMode="always"
          />
          <Text style={styles.labels}> Last Name </Text>
          <InputBox
            placeholder="Enter your Last Name"
            autoCompleteType="name"
            textContentType="name"
            keyboardAppearance="dark"
            defaultValue={this.state.password}
            clearButtonMode="always"
          />
          <Text style={styles.labels}> Email </Text>
          <InputBox
            placeholder="Enter your email address"
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={false}
            keyboardAppearance="dark"
            defaultValue={this.state.user_email}
            clearButtonMode="always"
          />

          <Text style={styles.labels}> Password </Text>
          <InputBox
            placeholder="Enter your password"
            autoCompleteType="password"
            secureTextEntry={true}
            textContentType="newPassword"
            keyboardAppearance="dark"
            defaultValue={this.state.password}
            clearButtonMode="always"
          />
      
        </KeyboardAvoidingView>
        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.button_sign_up}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#FCCF00",
    justifyContent: 'center',
    // alignItems: "center"
  },
  labels: {
    fontFamily: "theboldfont",
    fontSize: 20,
    // backgroundColor: 'black',
    alignSelf: 'flex-start'
  },

  logo: {
    borderRadius: 200,
    // backgroundColor: 'black',
    height: '15%',
    width: '15%',
    alignSelf: "center",
    marginBottom: '1%'
  },

  title: {
    fontFamily: 'Splatch',
    fontSize: 20,
    color: "black",
    textAlign: "center"
  },

  subText: {
    fontFamily: 'creation',
    textAlign: 'center',
    fontSize: 20,
  },
  options: {
    margin: 10,
  },
  button_login: {
    backgroundColor: 'rgba(207, 0, 15, 0.5)',
    borderRadius: 5,
    textAlign: "center",
    fontFamily: "theboldfont",
    fontSize: 25,
    fontWeight: "400",
    padding: 5,
    paddingTop: 10,
    margin: 5,
    height: 50
  },
  button_sign_up: {
    backgroundColor: "rgba(25, 181, 254, 0.5)",
    fontFamily: "theboldfont",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "200",
    padding: 5,
    paddingTop: 10,
    margin: 5,
    height: 50
  },
});
