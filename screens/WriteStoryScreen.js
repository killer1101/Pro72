import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
  KeyboardAvoidingView
} from 'react-native';

import { Header } from 'react-native-elements';
import db from '../config.js';
import firebase from 'firebase';

export default class WriteStoryScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      story: '',
    };
  }

  submitStory = async () => {
    db.collection('storyInfo').add({
      title: this.state.title,
      author: this.state.author,
      story: this.state.story,
      date: firebase.firestore.Timestamp.now().toDate(),
    });
   ToastAndroid.show('story submitted', ToastAndroid.SHORT);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.qrScanner}>
        <Header
          backgroundColor={'lightpink'}
          centerComponent={{
            text: 'Story Hub',
            style: {
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              fontStyle: 'oblique',
            
            },
          }}
        />
        <View style={styles.inputView}>
          <TextInput
            placeHolder="Story Title"
            style={styles.titleStyle}S
            onChangeText={(text) => {
              this.setState({ title: text });
            }}
            value={this.state.title}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeHolder="Author"
            style={styles.authorStyle}
            onChangeText={(text) => {
              this.setState({ author: text });
            }}
            value={this.state.author}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeHolder="Write your story"
            style={styles.storyStyle}
            onChangeText={(text) => {
              this.setState({ story: text });
            }}
            value={this.state.story}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.submitStory}>
            submit
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  qrScanner: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    
  },

  titleStyle: {
    width: 315,
    height: 40,
    borderWidth: 3,
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius:30,
  },
  authorStyle: {
    width: 315,
    height: 40,
    borderWidth: 3,
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius:30,
  },
  storyStyle: {
    width: 315,
    height: 300,
    borderWidth: 3,
    fontSize: 20,
    marginTop: 20,
     borderRadius:30,
 
  },
  submitButton: {
    backgroundColor: 'pink',
    width: 150,
    height: 30,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    fontSize: 20,
    borderWidth: 3,
   borderRadius:300,
  
    
    
  },
});
