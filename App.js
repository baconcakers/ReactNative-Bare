import React from 'react';
//import * as ScreenOrientation from 'expo-screen-orientation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AuthStack from './routes/AuthStack';


export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar />
      <AuthStack />
    </NavigationContainer>
  );
};