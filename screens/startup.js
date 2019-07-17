import React from 'react';



import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class Startup extends React.Component {
  render() {
    const title1 = '<DADA'
    const title2 = 'TEA>'
    const title3 = `${title1}` + ' ' + `${title2}`;;
    return (
      <View style={styles.login_container}>
      <StatusBar barStyle = {"dark-content"} /> 
        <Text style={styles.title}> {title3} </Text>

        <View>
          <Image
            style={styles.logo}
            source={require("../assets/boba_tea_logo.png")}
          />
          <Text style={styles.subText}>
            {" "}
            An React Native App. Inspired By Bubble Tea.{" "}
          </Text>
        </View>

        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.button_login}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button_sign_up}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login_container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#FCCF00',
    justifyContent: "center"
  },
  logo: {
    borderRadius: 200,
    // backgroundColor: 'black',
    height: 300,
    width: 300,
    alignSelf: "center",
    marginBottom: 25
  },

  title: {
    fontFamily: "Splatch",
    fontSize: 45,
    color: 'black',
    textAlign: 'center',
  },

  subText: {
    fontFamily: "creation",
    textAlign: "center",
    fontSize: 20
  },
  options: {
    margin: 10
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
