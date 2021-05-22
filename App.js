import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const tabNavigator = createBottomTabNavigator(
  {
    WriteStoryScreen: { screen: WriteStoryScreen },
    ReadStoryScreen: { screen: ReadStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({}) => {
        const routeName = navigation.state.routeName;
        if (routeName === 'WriteStoryScreen') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName === 'ReadStoryScreen') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{ width: 35, height: 30 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(tabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
