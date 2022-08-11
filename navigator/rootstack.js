import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import SplashWindow from '../screens/splash';

import LoginWindow from '../screens/sign';
import RegisterWindow from '../screens/register';
const RootStack =  createStackNavigator();
const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator initialRouteName="login">
     
        <RootStack.Screen name="login" component={LoginWindow} options={{headerShown:false}}/>
        <RootStack.Screen name="register" component={RegisterWindow} options={{headerShown:false}}/>
        
    
    </RootStack.Navigator>
    );
    
    export default RootStackScreen