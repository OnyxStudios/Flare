import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    KeyboardAvoidingView,
    TextInput,
    FlatList,
    ScrollView, ImageBackground
} from "react-native";
import {Header} from "react-navigation-stack";
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import {global as GlobalStyles} from "../assets/styles/GlobalStyles";
import {LinearGradient} from "expo-linear-gradient";
import {conversation as ConversationStyles} from "../assets/styles/ConversationStyles";
import {isToday, hexToRGBA} from './../utils/FlareUtils';
import {WALLPAPERS} from './../utils/Images';
import {inject, observer} from "mobx-react";
const Theme = require('./../assets/styles/Theme');

let tempData = {
    '5545471': [
        {
            id: '325421',
            date: '2/5/20',
            time: '1:15PM',
            sender: 'me',
            message: 'Hell o World message 1!'
        },
        {
            id: '54820',
            date: '2/6/20',
            time: '1:15PM',
            sender: 'them',
            message: 'Hell o World fkjgn fdjkg jkdfjkgk dfngfdj fjn jkdfngdfng jdfkg kdfng fdngkjfdjkg jkfgknjkg 1! 😊'
        },
        {
            id: '4568',
            date: '2/8/20',
            time: '1:15PM',
            sender: 'me',
            message: 'Fjng dfjnkgjfdg fgjkndfg dfkjgn dfgur uhhins! 🙂'
        },
        {
            id: '25578',
            date: '2/8/20',
            time: '1:15PM',
            sender: 'them',
            message: 'DFG kfjdng kjdfgjdfgr u!'
        },
        {
            id: '5461',
            date: '2/8/20',
            time: '1:18PM',
            sender: 'them',
            message: 'dfgk dfngjk ru nfjduru kfjdng kjdfgjdfgr u!'
        },
        {
            id: '31835',
            date: '2/8/20',
            time: '1:20PM',
            sender: 'me',
            message: 'dfkmg dfjgn jkdfgn dfjnjg jdfgk rehgiunfd'
        },
        {
            id: '245721',
            date: '2/8/20',
            time: '1:20PM',
            sender: 'them',
            message: 'fbghg eruinfg rfg561842'
        },
        {
            id: '548912',
            date: '2/8/20',
            time: '1:20PM',
            sender: 'me',
            message: 'fdgl ndfgj rue njfdn gr '
        },
        {
            id: '24552132',
            date: '2/8/20',
            time: '1:20PM',
            sender: 'them',
            message: 'dhjsbf hjdsfey bhj bfeuwhj dfbjejyf\ndb fhybey hjdbfyr \nhjdbfy e\nHello World!'
        }
    ]
};

let callFeatures = (callUser, videoCall) => {
    return (
        <View style={ConversationStyles.callFeatures}>
            <TouchableOpacity style={[ConversationStyles.features, {marginRight: 5}]} onPress={callUser}><FontAwesome name='phone' size={24} color={Theme.navTextColor} /></TouchableOpacity>
            <TouchableOpacity style={ConversationStyles.features} onPress={videoCall}><FontAwesome name='video-camera' size={24} color={Theme.navTextColor} /></TouchableOpacity>
        </View>
    );
};

let chatTitle = (icon, name) => {
    return (
        <View style={ConversationStyles.headerTitle}>
            <Image source={{uri: icon}} style={ConversationStyles.icon} />
            <Text style={ConversationStyles.name}>{name ? (name.length <= 14 ? name : name.substring(0, 11) + '...') : name}</Text>
        </View>
    );
};

@inject('wallpaperStore')
@observer
export default class ConversationScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerBackground: () => (<LinearGradient colors={[Theme.gradientColorLeft, Theme.gradientColorRight]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 1}} />),
        headerStyle: () => GlobalStyles.navigationHeader,
        headerTitle: () => chatTitle(navigation.getParam('icon'), navigation.getParam('chatName')),
        headerLeft: () => <TouchableOpacity style={ConversationStyles.backArrow} onPress={navigation.getParam('exitChat')}><Ionicons name='ios-arrow-back' size={30} color={Theme.navTextColor} /></TouchableOpacity>,
        headerRight: () => navigation.getParam('isGroupChat') ? null : callFeatures(navigation.getParam('callUser'), navigation.getParam('videoCallUser')),
    });

    state = {
        chatId: '',
        textMessage: ''
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
        this.props.navigation.goBack();
    };

    callUser = () => {
    };

    videoCallUser = () => {
    };

    MessageRenderer = (sender, message, date, time) => {
        let timeStamp = isToday(date) ? time : date;

        if(sender === 'me') {
            return (
                <View style={ConversationStyles.messageContainerRight}>
                    <LinearGradient style={ConversationStyles.messageRight} colors={[hexToRGBA(Theme.gradientColorLeft, 0.7), hexToRGBA(Theme.gradientColorRight, 0.7)]} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                        <Text style={{color: Theme.navTextColor, fontSize: 16}}>{message}</Text>
                        <Text style={{marginLeft: 'auto', color: Theme.navTextColor, paddingTop: 5, fontSize: 12}}>{timeStamp}</Text>
                    </LinearGradient>
                </View>
            );
        }else {
            return (
                <View style={ConversationStyles.messageContainerLeft}>
                    <View style={ConversationStyles.messageLeft}>
                        <Text style={{color: Theme.textColor, fontSize: 16}}>{message}</Text>
                        <Text style={{marginLeft: 'auto', color: Theme.subTextColor, paddingTop: 5, fontSize: 12}}>{timeStamp}</Text>
                    </View>
                </View>
            );
        }
    };

    getWallpaperSource = () => {
        const wallpaper = this.props.wallpaperStore.wallpaper;
        if(~wallpaper.indexOf('.') || ~wallpaper.indexOf('png') || ~wallpaper.indexOf('jpg')) {
            return {uri: wallpaper};
        }

        return WALLPAPERS[wallpaper];
    };

    render() {
        let {chatId, textMessage} = this.state;

        return(
                <KeyboardAvoidingView behavior='height' style={ConversationStyles.keyboardContainer} keyboardVerticalOffset={Header.HEIGHT}>
                    <ImageBackground source={this.getWallpaperSource()} style={{width: '100%', height: '100%'}}>
                        <ScrollView style={{flex: 1}} ref='scrollView' onContentSizeChange={(width, height) => this.refs.scrollView.scrollTo({y: height})}>
                            <FlatList
                                data={tempData[chatId]}
                                keyExtractor={(item) => item.id}
                                renderItem={({item}) => this.MessageRenderer(item.sender, item.message, item.date, item.time)}
                            />
                        </ScrollView>

                        <View style={ConversationStyles.messageOptions}>
                            <TextInput style={ConversationStyles.messageBox} multiline={true} value={textMessage}  placeholder='Message...' onChangeText={text => this.setState({textMessage: text})} />
                            <TouchableOpacity style={ConversationStyles.messageFeature}><Ionicons name='ios-camera' size={32} color={Theme.gradientColorLeft}/></TouchableOpacity>
                            <TouchableOpacity style={ConversationStyles.messageFeature}><Ionicons name='ios-send' size={32} color={Theme.confirmColor} /></TouchableOpacity>
                        </View>
                    </ImageBackground>
                </KeyboardAvoidingView>
        );
    }
}