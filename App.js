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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import StartUp from "./screens/startup";

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <StartUp />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
