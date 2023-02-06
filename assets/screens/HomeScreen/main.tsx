import React, {Fragment} from 'react'
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    Alert, 
    TouchableOpacity, 
    FlatList, 
    Pressable
} from 'react-native'
import Colors from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TopBar from '../TopBar'
import Content from '../Content'
import BottomBar from '../BottomBar'
import { SafeAreaView } from 'react-native-safe-area-context'
// moment 패키지 사용 이유: 과거와 현재의 시간 차이를 알기 쉬운 형태로 알려줌
import moment from 'moment'
import AsyncStorage from "@react-native-async-storage/async-storage"

// Data 불러오기 import
import { Person } from '../Person'
import PersonCell from '../Personcell'
import PersonData from '../PersonData.json'

// 내비게이션 import
import { Navigation } from '../types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
type Props = {
    navigation: Navigation;
}

const HomeScreen = ({ navigation }: Props) => {
    const iconPressed= () => Alert.alert('Icon pressed')
    return (
        <Fragment>
        <SafeAreaView style={styles.flex}>
            {/* TopBar */}
            <TopBar />
            {/* Body  */}
            <View style={styles.container}> 
                <Text style={styles.header}>★둘러보기★</Text>
                <FlatList
                    data={PersonData as Person[]}
                    renderItem={PressableItem}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </SafeAreaView>
        {/* floating 버튼 */}
        <View style={[styles.absoluteView]}>
            <Icon name='plus' size={40} color='yellow' onPress={iconPressed} />
        </View>
        </Fragment>
    )
}

// 개별 Data 클릭시 알림창
const PressableItem = ({ item }: { item: Person }) => {
    return (
      <Pressable onPress={() => alert(`Pressed: ${item.name}`)}>
        <PersonCell item={item} />
      </Pressable>
    );
  };

const styles = StyleSheet.create({
    flex: {flex:1, backgroundColor: 'white'},
    absoluteView: {
        backgroundColor:'purple',
        position:'absolute',
        right:20,
        bottom:Platform.select({ios:100, android:20}),
        padding:10,
        borderRadius:35
    },
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "rgba(50,50,50,1)",
      },
      header: {
        fontSize: 15,
        marginBottom: 15,
        fontWeight: "bold",
        color: "white",
      }
})

export default HomeScreen;