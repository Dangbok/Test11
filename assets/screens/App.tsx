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

// color import
import Colors from 'react-native-paper'
import Color from 'color'

// icon import
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// kakao 로그인 import 
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  KakaoProfileNoneAgreement,
  login,
  logout,
  unlink,
  getProfile,
} from '@react-native-seoul/kakao-login';

// App 시작
function App() {
  
  // kakao 로그인 적용 코드
  const [result,setResult] = useState<string>('');

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token: KakaoOAuthToken = await login();
      console.log(token);
      
      setResult(JSON.stringify(token));
    } catch(err) {
      console.log(err);
      
    }
  };
  
  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();
      console.log(message);
      
      setResult(message);
    } catch(err) {
      console.log(err);
      
    }
  };
  
  const getKakaoProfile = async (): Promise<void> => {
    try {
      
      const profile: KakaoProfile|KakaoProfileNoneAgreement = await getProfile();
      console.log(profile);
    
      setResult(JSON.stringify(profile));
    } catch(err) {
      console.log(err);
      
    }
  };
  
  const unlinkKakao = async (): Promise<void> => {
    try {
      
      const message = await unlink();
      console.log(message);
    
      setResult(message);
    } catch(err) {
      console.log(err);
      
    }
  };

  // 화면에 나타나는 코드
  return (
      <View style={styles.container}>
      <Image 
        style={styles.image1}
        source={require('./assets/image/logo_.png')} />
      <View style={{ marginTop: 20 }} />
      <Text>result : {result}</Text>
      <View style={{ marginTop: 10 }} />
      <TouchableOpacity onPress={()=>signInWithKakao()}>
        <Image style={styles.image2}
        source={require('./assets/image/kakao_login_medium_wide.png')}/>
      </TouchableOpacity>
      <View style={{ marginTop: 10 }} />
      <Icon name="home" size={50} />
      
      {/* <Button
        testID="btn-login"
        onPress={() => signInWithKakao()}
        title={'Kakao Login'}
         />
      <View style={{ marginTop: 20 }} /> */}
      {/* <Button
        testID="btn-login"
        onPress={() => getKakaoProfile()}
        title={'profile'} />
      <View style={{ marginTop: 20 }} />
      <Button
        testID="btn-login"
        onPress={() => unlinkKakao()}
        title={'링크 해제'} />
      <View style={{ marginTop: 20 }} />
      <Button
        onPress={() => signOutWithKakao()}
        title={'카카오 로그아웃'} />
      <View style={{ marginTop: 20 }} /> */}
    </View>
  )
}

// style 적용 코드
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#8FDBA2',
    justifyContent:'center',
    alignItems:'center'
  },
  image1:{
    backgroundColor:'red',
    width:300,
    height:300,
  },
  image2:{
    backgroundColor:'blue',
    width:250,
    height:250,
    resizeMode:'contain'
  }
});


export default App