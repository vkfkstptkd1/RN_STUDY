import React, { useEffect } from 'react';
import {View, Button} from 'react-native';

function HomeScreen({navigation}){
    useEffect(() => {
        navigation.setOptions({title: '홈홈홈'}); //useeffect를 통해 설정한 내비게이션 option은 app컴포넌트에서 props를 통해 설정한 option을 덮어씀.
    },[navigation]);                             //ES 규칙상 useEffect 내부에서 사용하는 값을 꼭 deps(두번째 인자에 넣는 배열)에 넣어야 함.
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
            <Button title="headerless 열기"
                    onPress={() => navigation.push('Headerless')}
            />
        </View>
    );
}

export default HomeScreen;