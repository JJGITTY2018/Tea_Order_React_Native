import React from "react";

import {
  StyleSheet,
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import InputBox from '../components/textInput';

class Home extends React.Component {
  state = {
};

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.routeName,
      headerStyle: {
        display: 'none',
      },
    }
  }
  
  render() {
   return (
      <View>
        <StatusBar barStyle={"dark-content"} backgroundColor='#FCCF00' />
        <Text> HOME PAGE </Text>
      </View>
    );
  };

}

export default (Home);

const styles = StyleSheet.create({
 
});
