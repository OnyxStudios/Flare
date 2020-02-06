import React from 'react';
import {Text, TouchableOpacity, ImageBackground} from "react-native";
import {DARK_BG} from "../utils/Images";

export default class CallsScreen extends React.Component {
    static navigationOptions = {headerShown: false};

    render() {
        return(
            <ImageBackground source={DARK_BG} style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Text style={{color: 'white'}}>Welcome To Flare</Text>
                <TouchableOpacity style={{backgroundColor: 'white', padding: 10}} onPress={() => this.props.navigation.navigate('Main')}><Text>Go To Home!</Text></TouchableOpacity>
            </ImageBackground>
        );
    }
}