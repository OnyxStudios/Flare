import React from 'react';
import {Text} from "react-native";
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import WelcomScreen from './screens/WelcomeScreen';
import CallsScreen from './screens/CallsScreen';
import ChatsScreen from './screens/ChatsScreen';
import SettingsScreen from './screens/SettingsScreen';
import ConversationScreen from './screens/ConversationScreen';
import WallpaperPresetsScreen from './screens/WallpaperPresetsScreen';

import {global as GlobalStyles} from './assets/styles/GlobalStyles';
const Theme = require('./assets/styles/Theme');

const CallsStack = createStackNavigator({Calls: {screen: CallsScreen}}, {initialRouteName: 'Calls'});
const ChatsStack = createStackNavigator({Chats: {screen: ChatsScreen}, Conversation: {screen: ConversationScreen}}, {initialRouteName: 'Chats'});
const SettingsStack = createStackNavigator({Settings: {screen: SettingsScreen}, Wallpaper: {screen: WallpaperPresetsScreen}}, {initialRouteName: 'Settings'});
ChatsStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if(navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    }
};

SettingsStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if(navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    }
};

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
            tabBarIcon: ({tintColor}) => (<Ionicons name='ios-chatboxes' size={24} color={tintColor} />)
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