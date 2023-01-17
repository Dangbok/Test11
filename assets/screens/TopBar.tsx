import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
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
            <View style={styles.centerView}>
                <Text style={[styles.text]}>{title}</Text>
            </View>
            <Icon name='menu' size={24} color="white" />
        </View>
    )
}
const styles=StyleSheet.create({
    view: {flexDirection:'row',alignItems:'center',padding: 5, backgroundColor:'red'},
    text: {fontSize:20,textAlign:'center', color: 'white'},
    centerView: {flex: 1}
})