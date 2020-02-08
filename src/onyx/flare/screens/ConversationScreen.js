import React from 'react';
import {Text, TouchableOpacity, View, Image} from "react-native";
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import {global as GlobalStyles} from "../assets/styles/GlobalStyles";
import {LinearGradient} from "expo-linear-gradient";
import {conversation as ConversationStyles} from "../assets/styles/ConversationStyles";
const Theme = require('./../assets/styles/Theme');

let messages = {
    '5545471': [
        {
            date: '2/8/20',
            time: '1:15PM',
            sender: 'me',
            message: ''
        }
    ]
};

let callFeatures = (callUser, videoCall) => {
    return (
        <View style={ConversationStyles.callFeatures}>
            <TouchableOpacity style={{marginRight: 15}} onPress={callUser}><FontAwesome name='phone' size={24} color={Theme.confirmColor} /></TouchableOpacity>
            <TouchableOpacity onPress={videoCall}><FontAwesome name='video-camera' size={24} color={Theme.confirmColor} /></TouchableOpacity>
        </View>
    );
};

let chatTitle = (icon, name) => {
    return (
        <View style={ConversationStyles.headerTitle}>
            <Image source={{uri: icon}} style={ConversationStyles.icon} />
            <Text style={ConversationStyles.name}>{name}</Text>
        </View>
    );
};

export default class ConversationScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerBackground: () => (<LinearGradient colors={[Theme.gradientColorLeft, Theme.gradientColorRight]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 1}} />),
        headerStyle: GlobalStyles.navigationHeader,
        headerTitle: () => chatTitle(navigation.getParam('icon'), navigation.getParam('chatName')),
        headerLeft: () => <TouchableOpacity style={ConversationStyles.backArrow} onPress={navigation.getParam('exitChat')}><Ionicons name='ios-arrow-back' size={30} color={Theme.confirmColor} /></TouchableOpacity>,
        headerRight: () => navigation.getParam('isGroupChat') ? null : callFeatures(navigation.getParam('callUser'), navigation.getParam('videoCallUser')),
    });

    state = {
        chatId: ''
    };

    componentDidMount() {
        let {chatData} = this.props.navigation.state.params;
        this.props.navigation.setParams({
            icon: chatData.icon,
            chatName: chatData.name,
            exitChat: this.exitChat,
            isGroupChat: chatData.isGroupChat,
            callUser: this.callUser,
            videoCallUser: this.videoCallUser
        });

        this.setState({chatId: chatData.id});
    }

    exitChat = () => {
    };

    callUser = () => {
    };

    videoCallUser = () => {
    };

    render() {
        return(
            <View>
                <Text>Hello World</Text>
            </View>
        );
    }
}