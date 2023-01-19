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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// 내비게이션 import
import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from './assets/screens/LoginScreen/loginpage'
import MainPage from './assets/screens/HomeScreen/main'
import WritingPage from './assets/screens/HomeScreen/writing'
import MyPage from './assets/screens/HomeScreen/mypage'


enableScreens()

// 로그인페이지에서 성공시 홈페이지로 내비게이션
const Stack = createStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loginpage" component={LoginPage} />
        <Stack.Screen name="main" component={BottomTabNavigator} />
      </Stack.Navigator>
  );
}

// 홈페이지에서 BottomTab에 따른 내비게이션
const Tab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false }}>
      <Tab.Screen 
      name='홈' 
      component={MainPage}
      options= {{
        tabBarIcon: ({ color, size }) =>(
          <Icon name='home' size={size} color={color} />
        )
      }} />
      <Tab.Screen 
      name='일기쓰기' 
      component={WritingPage}
      options= {{
        tabBarIcon: ({ color, size }) =>(
          <Icon name='pencil-plus' size={size} color={color} />
        )
      }} />
      <Tab.Screen 
      name='마이페이지' 
      component={MyPage}
      options= {{
        tabBarIcon: ({ color, size }) =>(
          <Icon name='account' size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  );
}

// App 시작
export default function App() {

  // 내비게이션 전환
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
