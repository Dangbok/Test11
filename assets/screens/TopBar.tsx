import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import Colors from 'react-native-paper'
// import * as D from './data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const title='다시, 봄'
// const avatarUrl= D.randomAvatarUrl()
// const name= D.randomName()

export default function TopBar(){
    return(
        <View style={[styles.view]}>
            {/* <Image style={styles.avatar} source={{uri: avatarUrl}} /> */}
            <Image 
                style={styles.image1}
                source={require('../../assets/image/logo.png')} />
            <View style={styles.centerView}>
                <Text style={[styles.text]}>{title}</Text>
            </View>
            <TouchableOpacity onPress={()=> {}}>
                <Icon name='clipboard-text' size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {}}>
                <Icon name='bell' size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {}}>
                <Icon name='menu' size={25} color="black" />
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    view: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        padding: 3,
        backgroundColor:'#8FDBA2'},
    image1:{
        width:40,
        height:40,
        left:20
      },
    text: {fontSize:20,textAlign:'center', color: 'black'},
    centerView: {flex: 0.8}
})