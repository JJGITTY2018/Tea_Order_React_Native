
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
import Startup from "./screens/startup"

import AppNavigator from "./components/AppNavigator"


export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Fragment> 
        <StatusBar barStyle={"dark-content"} backgroundColor='#FCCF00' /> 
       <AppNavigator />
      </Fragment>
        );
  }
}




// const styles = StyleSheet.create({

// });
