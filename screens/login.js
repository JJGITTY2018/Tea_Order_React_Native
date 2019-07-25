import React from "react";


import {
  StyleSheet,
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar
} from "react-native";

import InputBox from '../components/textInput';

export default class Login extends React.Component {
  state = {
    user_email: 'bobatea123@gmail.com',
    password: '',
  };

 
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.routeName
    }
  };


  render() {
    const title1 = '<WELCOME'
    const title2 = 'BACK>'
    const title3 = `${title1}` + ' ' + `${title2}`;;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor='#FCCF00' /> 

        <Text style={styles.title}> {title3} </Text>

        <Image
          style={styles.logo}
          source={require("../assets/boba_tea_logo.png")}
        />
        <KeyboardAvoidingView behavior="padding" enabled>
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
            textContentType="password"
            keyboardAppearance="dark"
            defaultValue={this.state.password}
            clearButtonMode="always"
          />
          <View style={styles.options}>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Home') }>
              <Text style={styles.button_login}> Login </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    height: '35%',
    width: '35%',
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
