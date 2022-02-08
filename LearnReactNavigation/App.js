import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

function App(){
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" 
                    component={HomeScreen}  
                    options={{
                      title: '홈홈홈',
                    }}
      />
      <Stack.Screen name="Detail" 
                    component={DetailScreen} 
                    options={({route})=>({                  //app에서 stack option으로 나타내려면 반환함수 사용.
                      title: `상세정보 - ${route.params.id}`,
                    })}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
