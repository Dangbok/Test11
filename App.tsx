import React, { useCallback, useState, Component } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

// 내비게이션 import
import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from './assets/screens/LoginScreen/loginpage'
import MainPage from './assets/screens/HomeScreen/main'


enableScreens()

const Stack = createStackNavigator();

// App 시작
export default function App() {

  // 화면에 나타나는 코드
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginpage">
        <Stack.Screen name="loginpage" component={LoginPage} />
        <Stack.Screen name="main" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
