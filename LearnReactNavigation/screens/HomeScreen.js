import React from 'react';
import {View, Button} from 'react-native';

function HomeScreen({navigation}){
    return(
        <View>
            <Button title="DETAIL 열기1" 
                    onpress={()=> navigation.navigate('Detail',{id:1})} // 의존해야하는 값은 라우트 파라미터로 객체형식으로 표시
            />
            <Button title="DETAIL 열기2" 
                    onpress={()=> navigation.navigate('Detail',{id:2})}
            />
            <Button title="DETAIL 열기3" 
                    onpress={()=> navigation.navigate('Detail',{id:3})}
            />
        </View>
    );
}

export default HomeScreen;