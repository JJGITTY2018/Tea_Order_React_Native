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

import SplashScreen from 'react-native-splash-screen'
import StartUp from "./screens/startup";


export default class App extends React.Component {


  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
     
      <View>
        <StatusBar barStyle= "dark-content"
          backgroundColor= '#FCCF00' />
      <StartUp />
      </View>

    );
  }
}

const styles = StyleSheet.create({

});
