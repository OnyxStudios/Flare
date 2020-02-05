import React from 'react';
import {Text} from "react-native";
import {FontAwesome} from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import WelcomScreen from './screens/WelcomeScreen';
import CallsScreen from './screens/CallsScreen';
import ChatsScreen from './screens/ChatsScreen';
import SettingsScreen from './screens/SettingsScreen';

import {global as GlobalStyles} from './assets/styles/GlobalStyles';
const Theme = require('./assets/styles/Theme');

const CallsStack = createStackNavigator({Calls: {screen: CallsScreen}}, {initialRouteName: 'Calls'});
const ChatsStack = createStackNavigator({Chats: {screen: ChatsScreen}}, {initialRouteName: 'Chats'});
const SettingsStack = createStackNavigator({Settings: {screen: SettingsScreen}}, {initialRouteName: 'Settings'});
const MainStackRoutes = {
    Calls: {
        screen: CallsStack,
        navigationOptions: {
            tabBarLabel: <Text style={{fontSize: 14}}>Calls</Text>,
            tabBarIcon: ({tintColor}) => (<FontAwesome name='phone' size={24} color={tintColor}/>)
        }
    },
    Chats: {
        screen: ChatsStack,
        navigationOptions: {
            tabBarLabel: <Text style={{fontSize: 14}}>Chats</Text>,
            tabBarIcon: ({tintColor}) => (<FontAwesome name='comment' size={24} color={tintColor} />)
        }
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: {
            tabBarLabel: <Text style={{fontSize: 14}}>Settings</Text>,
            tabBarIcon: ({tintColor}) => (<FontAwesome name='sliders' size={24} color={tintColor} />)
        }
    }
};
const MainStackOptions = {
    initialRouteName: 'Chats',
    activeColor: Theme.navActiveColor,
    inactiveColor: Theme.navInactiveColor,
    barStyle: GlobalStyles.navigationBar,
    shifting: true
};


const MainStack = createMaterialBottomTabNavigator(MainStackRoutes, MainStackOptions);
const SignInStack = createStackNavigator({Welcome: {screen: WelcomScreen}}, {initialRouteName: 'Welcome'});

module.exports = {
    MainStack,
    SignInStack
};