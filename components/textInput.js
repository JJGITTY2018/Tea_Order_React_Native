import React from 'react';


import {
  TextInput,
  TextInputProps,
  StyleSheet
} from 'react-native';

type Props = TextInputProps


export default class InputBox extends React.Component {


  render() {
    const { style, ...otherProps } = this.props 
    return (
     
      <TextInput selectionColor= 'rgba(254, 211, 48,.5)' style = {styles.box} {...otherProps} />

    );
  }
}

const styles = StyleSheet.create({
  box: { 
    fontFamily: 'OpenSans-Bold',
    letterSpacing:1.1,
    fontSize: 15,
    height: 60,
    borderColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 2,
    paddingBottom: 2,

  },
});
