import React from 'react';
import {Text, TouchableOpacity, ImageBackground} from "react-native";
import {WALLPAPERS} from "../utils/Images";

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {headerShown: false};

    /*
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };
     */

    render() {
        return(
            <ImageBackground source={WALLPAPERS['DARK_BG']} style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Text style={{color: 'white'}}>Welcome To Flare</Text>
                <TouchableOpacity style={{backgroundColor: 'white', padding: 10}} onPress={() => this.props.navigation.navigate('Main')}><Text>Go To Home!</Text></TouchableOpacity>
            </ImageBackground>
        );
    }
}