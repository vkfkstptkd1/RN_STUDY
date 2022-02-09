import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation/material-tob-tabs';
import {Text,Button,View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

function HomeScreen({navigation}){
    return(
        <View>
            <Text>Home</Text>
            <Button title = "detail 1 열기"
                    onPress={() => 
                        navigation.push('Detail',{
                            id:1,
                        })
                    }
            />
        </View>
    );
}

function SearchScreen(){
    return(
        <View>
            <Text>Search</Text>
        </View>
    );
}

function NotificationScreen() {
    return (
        <View>
            <Text>Notification</Text>
        </View>
    );
}

function MessageScreen() {
    return (
        <View>
            <Text>Message</Text>
        </View>
    );    
}

function MainScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
            }}>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tarBarIcon: ({color}) => (
                <Icon name="home" color={color} size={24}/>
                ),
            }}
        />
        <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
                tarBarIcon: ({color}) => (
                    <Icon name="Search" color = {color} size={24}/>
                ),
           }}
        />
         <Tab.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
                tarBarIcon: ({color}) => (
                    <Icon name="Notification" color = {color} size={24}/>
                ),
           }}
        />
        <Tab.Screen
            name="Message"
            component={MessageScreen}
            options={{
                tarBarIcon: ({color}) => (
                    <Icon name="Message" color = {color} size={24}/>
                ),
           }}
        />
        </Tab.Navigator>
    );
}

export default MainScreen;