import React from "react";
import {View,Text,Button} from 'react-native';

function HeaderlessScreen({navigation}) {
    return(
        <View>
            <Text> 헤더가 없넹 !! </Text>
            <Button onPress={() => navigation.pop()} title="뒤로가기"/> {/* ios에선 헤더가없으면 뒤로 갈 방법이 없어서 뒤로가기 버튼 호출 */}
        </View>
    )
}

export default HeaderlessScreen;