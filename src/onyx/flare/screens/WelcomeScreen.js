import React from 'react';
import {Text, View, TouchableOpacity, Dimensions, ImageBackground} from "react-native";
import {global as GlobalStyles} from './../assets/styles/GlobalStyles';
import {DARK_BG} from "../utils/Images";

export default class CallsScreen extends React.Component {
    static navigationOptions = {headerShown: false};

    render() {
        return(
            <ImageBackground source={DARK_BG} style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Text>Welcome To Flare</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}><Text>Go To Home!</Text></TouchableOpacity>
            </ImageBackground>
        );
    }
}