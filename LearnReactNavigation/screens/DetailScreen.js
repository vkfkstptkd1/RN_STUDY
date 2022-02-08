import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function DetailScreen({route, navigation}) {
    
    useEffect(()=>{
        navigation.setOptions({
            title: `상세정보 - ${route.params.id}`,
        });
    },[navigation,route.params.id]);

    return (
        <View style={styles.block}>
            <Text style={styles.text}> id: {route.params.id} </Text>
        <View style={styles.buttons}>
            <Button title="다음"
                    onPress={() => navigation.navigate('Detail', {id: route.params.id + 1})} //push로도 가능. push는 스택을 쌓는 느낌이라 다음 누른 수만큼, 뒤로가기 눌러야함. 하지만 네비게이트는 이동화면이 현재화면과 같으면 화면변경 x 파라미터만 변경
            />                    
            <Button title="뒤로가기" onPress={()=> navigation.pop()}/>                        {/* 이전 화면으로 이동 */}
            <Button title="처음으로" onPress={()=> navigation.popToTop()}/>                   {/* 처음 화면으로 이동 */}                               
         </View>
        </View>                                                                              
    );
}

const styles= StyleSheet.create({
    block:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSzie: 48,
    },
    buttons:{
        flexDirection: 'row',
    }
})
export default DetailScreen;
