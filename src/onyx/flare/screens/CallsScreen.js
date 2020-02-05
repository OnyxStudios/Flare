import React from 'react';
import {Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {global as GlobalStyles} from './../assets/styles/GlobalStyles';
const Theme = require('./../assets/styles/Theme');

export default class CallsScreen extends React.Component {
    static navigationOptions = {
        title: <Text style={GlobalStyles.headerText}>Calls</Text>,
        headerBackground: () => (<LinearGradient colors={[Theme.gradientColorLeft, Theme.gradientColorRight]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 1}} />),
        headerStyle: GlobalStyles.navigationHeader
    };

    render() {
        return(
            <View>
                <Text>Hello World</Text>
            </View>
        );
    }
}