import React from 'react';
import {Text, View} from "react-native";
import {global as GlobalStyles} from './../assets/styles/GlobalStyles';

export default class CallsScreen extends React.Component {
    static navigationOptions = {
        title: <Text style={GlobalStyles.headerText}>Chats</Text>,
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