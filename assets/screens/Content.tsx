import Color from 'color'
import React from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'
import Colors from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const iconSize =30, iconColor='white'

export default function Content(){
    const children= new Array(200).fill(null).map((notUsed, index) => (
        <View key={index.toString()} style={{padding: 3}}>
            <Icon name={'home'} size={iconSize} color={iconColor} />
        </View>
    ))
    return(
        <ScrollView contentContainerStyle={[styles.view]}>
            {children}
        </ScrollView>

        // <View style={[styles.view]}>
        //     {children}
        //     <Text style={[styles.text]}>{title}</Text>
        //     <View style={[{flex:0,backgroundColor:'black'}]}>
        //         <Text style={{color:'white'}}>flex: 0</Text>
        //     </View>
        //     <View style={[{flex:0,backgroundColor:'black'}]}>
        //         <Text style={{color:'white'}}>flex: 1</Text>
        //     </View>
        //     <View style={[{flex:1,backgroundColor:'purple'}]}>
        //         <Text style={{color:'white'}}>flex: 2</Text>
        //     </View>
        // </View>
    )
}
const styles=StyleSheet.create({
    view: {
        flexDirection:'row',
        overflow:'hidden',
        flexWrap:'wrap',
        justifyContent:'center',
        // flex:1, 
        padding: 5,
        backgroundColor:'green'},
    text: {
        fontSize:20,
        color: 'white'}
    
})