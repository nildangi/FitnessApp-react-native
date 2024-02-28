//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Apps/Navigations/TabNavigation';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;
