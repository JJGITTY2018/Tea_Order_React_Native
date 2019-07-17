/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'

import StartUp from "./screens/startup";
import Login from "./screens/login"
import SignUp from "./screens/signup"



export default class App extends React.Component {


  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
     
      <View>
        <StatusBar barStyle= "dark-content"
          backgroundColor= '#FCCF00' />
        <Login />
      </View>

    );
  }
}

const styles = StyleSheet.create({

});
