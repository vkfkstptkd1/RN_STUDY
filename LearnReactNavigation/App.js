import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

function App(){
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" 
                    component={HomeScreen}  
                    options={{
                      title: '홈홈홈',
                    //header 블록 스타일
                      headerStyle:{
                        backgroundColor: '#000000',
                      },
                      //header의 텍스트, 버튼들 색상
                      headerTintColor: '#ffffff',
                      //타이틀 텍스트의 스타일
                      headerTitleStyle: {
                        fontweight: 'bold',
                        fontSize: 20,
                      },
                    }}
      />
      <Stack.Screen name="Detail" 
                    component={DetailScreen} 
                    options={({route})=>({                   //app에서 stack option으로 나타내려면 반환함수 사용.
                      title: `상세정보 - ${route.params.id}`, //반환값이 객체타입이라면 객체를 소괄호로 감싸줘야함. =>{ return {title: `상세정보 - ${route.params.id}`}} 과 같은 의미
                    })}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
