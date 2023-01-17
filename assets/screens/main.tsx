import React, {Fragment} from 'react'
import {Platform, StyleSheet, SafeAreaView, View, Alert} from 'react-native'
import Colors from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TopBar from './TopBar'
import Content from './Content'
import BottomBar from './BottomBar'
// moment 패키지 사용 이유: 과거와 현재의 시간 차이를 알기 쉬운 형태로 알려줌
import moment from 'moment'

export default function main(){
    const iconPressed= () => Alert.alert('Icon pressed')
    return (
        <Fragment>
        <SafeAreaView style={styles.flex}>
            <TopBar />
            <Content />
            <BottomBar />
        </SafeAreaView>
        {/* floating 버튼 */}
        <View style={[styles.absoluteView]}>
            <Icon name='plus' size={50} color='yellow' onPress={iconPressed} />
        </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    flex: {flex:1, backgroundColor: 'grey'},
    absoluteView: {
        backgroundColor:'purple',
        position:'absolute',
        right:30,
        bottom:Platform.select({ios:100, android:80}),
        padding:10,
        borderRadius:35
    }
})