import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { TouchableOpacity } from 'react-native';
import HeaderlessScreen from './screens/HeaderlessScreen';

const Stack = createNativeStackNavigator();

function App(){
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
                     //screenOptions={{}} // 이 옵션을 통해 모든 페이지의 속성 설정 가능. stack.screen의 options 과 같은 느낌.
    />
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
                      headerBackVisible: false,//안드로이드에서 좌측 화살표 아이콘 지우기
                      headerLeft: ({onPress}) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text>Left</Text>
                        </TouchableOpacity>
                      ),
                      headerTitle: ({children}) => (
                        <View>
                         <Text>{children}</Text>
                        </View>
                      ),
                      headerRight: () => (
                        <TouchableOpacity onPress={onPress}>
                          <Text>Right</Text>
                        </TouchableOpacity>
                      ),
                    }}
      />
      <Stack.Screen name="Detail" 
                    component={DetailScreen} 
                    options={({route})=>({                   //app에서 stack option으로 나타내려면 반환함수 사용.
                      title: `상세정보 - ${route.params.id}`, //반환값이 객체타입이라면 객체를 소괄호로 감싸줘야함. =>{ return {title: `상세정보 - ${route.params.id}`}} 과 같은 의미
                    })}
      />
      <Stack.Screen name="Headerless"
                    component={HeaderlessScreen}
                    options={{
                      headerShown: false,
                    }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
