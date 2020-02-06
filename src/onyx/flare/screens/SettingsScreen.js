import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from "react-native";
import {global as GlobalStyles} from './../assets/styles/GlobalStyles';
import {LinearGradient} from "expo-linear-gradient";
import {settings as SettingStyles} from "./../assets/styles/SettingsStyles";
import {LOGO} from './../utils/Images';
const Theme = require('./../assets/styles/Theme');

let userData = {
    profilePic: 'https://cdn.discordapp.com/avatars/185789074873778177/2371bf4c9c12be3eb76f53be525cec8b.png',
    name: 'Mohammad',
    number: '(313) 247-2218'
};

export default class CallsScreen extends React.Component {
    static navigationOptions = {
        title: <Text style={GlobalStyles.headerText}>Settings</Text>,
        headerBackground: () => (<LinearGradient colors={[Theme.gradientColorLeft, Theme.gradientColorRight]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 1}} />),
        headerStyle: GlobalStyles.navigationHeader
    };

    //TODO: Temporary until database and backend is stored so i can retrieve data
    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <View>
                    <Image source={{uri: userData.profilePic}} style={SettingStyles.profilePic} />
                    <Text>{userData.name}</Text>
                </View>
            </SafeAreaView>
        );
    }
}