import React from 'react';
import { Navigation } from 'react-native-navigation';


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
    const title1 = '<DADA';;
    const title2 = 'TEA>';;
    const title3 = `${title1}` + ' ' + `${title2}`;;
    return (
      <View style={styles.login_container}>
        <StatusBar barStyle={"dark-content"} />
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


      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  },
});
