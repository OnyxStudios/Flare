import React from 'react';
import {Text, View, TouchableOpacity} from "react-native";
import {global as GlobalStyles} from './../assets/styles/GlobalStyles';

export default class CallsScreen extends React.Component {
    static navigationOptions = {headerShown: false};

    render() {
        return(
            <View>
                <Text>Welcome To Flare</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}><Text>Go To Home!</Text></TouchableOpacity>
            </View>
        );
    }
}