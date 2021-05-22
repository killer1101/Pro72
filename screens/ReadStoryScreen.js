import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config.js';
import firebase from 'firebase';

export default class ReadStoryScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.text}>Nothing here yet!! Check back later</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
