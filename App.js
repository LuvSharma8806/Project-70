import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import inst from './screens/in';


export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
 }
}

const TabNavigator=createBottomTabNavigator({
  WriteStoryScreen:{screen:WriteStoryScreen},
  ReadStoryScreen:{screen:ReadStoryScreen}
})


const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
