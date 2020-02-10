import React from 'react';
import {Text, View, SafeAreaView, FlatList, Image, TouchableOpacity} from "react-native";
import Swipeable from 'react-native-swipeable-row';
import {Ionicons} from '@expo/vector-icons';
import {global as GlobalStyles} from './../assets/styles/GlobalStyles';
import {LinearGradient} from "expo-linear-gradient";
import {chats as ChatsStyles} from './../assets/styles/ChatsStyles';
import {isToday} from './../utils/FlareUtils';
const Theme = require('./../assets/styles/Theme');

let tempData = [
    {
        id: '5545471',
        name: 'abused_master',
        icon: 'https://cdn.discordapp.com/avatars/185789074873778177/2371bf4c9c12be3eb76f53be525cec8b.png',
        lastMsg: 'Memes',
        lastMsgDate: '2/8/20',
        lastMsgTime: '1:15AM',
        isGroupChat: false
    },
    {
        id: '6549862',
        name: 'Steve Jobs',
        icon: 'https://cdn2.hubspot.net/hubfs/1716276/API/celebrities/steve_jobs.jpg',
        lastMsg: 'Dead Man CEO Of Apple!',
        lastMsgDate: '2/5/20',
        lastMsgTime: '1:15AM',
        isGroupChat: false
    },
    {
        id: '8712354',
        name: 'Bill Gates',
        icon: 'https://assets.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg-768x516.jpg',
        lastMsg: 'I Own Microsoft, Simple as that.',
        lastMsgDate: '1/6/20',
        lastMsgTime: '1:15AM',
        isGroupChat: false
    },
    {
        id: '3654831',
        name: 'UpcraftLP',
        icon: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f35aa499-0a17-47bf-8365-e6012ff7aed5-profile_image-300x300.png',
        lastMsg: 'I\'m German, and a Minecraft Mod Dev!',
        lastMsgDate: '9/8/19',
        lastMsgTime: '1:15AM',
        isGroupChat: false
    },
    {
        id: '654862',
        name: 'SexyWah',
        icon: 'https://static-cdn.jtvnw.net/jtv_user_pictures/686e73a4-5042-4633-b5f1-ae80217ca0cd-profile_image-300x300.png',
        lastMsg: ':P',
        lastMsgDate: '7/3/19',
        lastMsgTime: '1:15AM',
        isGroupChat: false
    },
    {
        id: '123548',
        name: 'cjm721',
        icon: 'https://static-cdn.jtvnw.net/jtv_user_pictures/cjm721-profile_image-c9c7b8e5c4bac1b4-300x300.png',
        lastMsg: 'Why Did I choose bedrock?',
        lastMsgDate: '2/2/20',
        lastMsgTime: '1:15AM',
        isGroupChat: false
    }
];

export default class ChatsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: () => <Text style={GlobalStyles.headerText}>Chats</Text>,
        headerBackground: () => (<LinearGradient colors={[Theme.gradientColorLeft, Theme.gradientColorRight]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 1}} />),
        headerStyle: () => GlobalStyles.navigationHeader,
        headerRight: () => <TouchableOpacity style={ChatsStyles.creatChat} onPress={navigation.getParam('createChat')}><Ionicons name='ios-create' size={30} color={Theme.navTextColor} /></TouchableOpacity>
    });

    state = {
        swiping: false
    };

    componentDidMount() {
        this.props.navigation.setParams({createChat: this.createChat});
    }

    createChat = () => {
    };

    openChat = (chatData) => {
        this.props.navigation.navigate('Conversation', {chatData});
    };

    setSwiping = () => {
        let {swiping} = this.state;
        this.setState({swiping: !swiping});
    };

    deleteChat = (chatID) => {
        console.log("Pressed Delete! " + chatID)
    };

    DeleteButton = (chatID) => {
        return <TouchableOpacity onPress={() => this.deleteChat(chatID)} style={GlobalStyles.deleteSwipe}><Text style={{color: Theme.navTextColor, fontSize: 16}}>Delete</Text></TouchableOpacity>;
    };

    render() {
        let {swiping} = this.state;

        return(
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={tempData}
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={!swiping}
                    renderItem={({item}) => {
                        return (
                            <Swipeable rightButtons={[this.DeleteButton(item.id)]} onSwipeStart={this.setSwiping} onSwipeRelease={this.setSwiping}>
                                <TouchableOpacity style={ChatsStyles.chatContainer} onPress={() => this.openChat(item)}>
                                    <Image source={{uri: item.icon}} style={ChatsStyles.chatIcon} />
                                    <View style={ChatsStyles.chatData}>
                                        <View style={ChatsStyles.chatHeading}>
                                            <Text numberOfLines={1} style={ChatsStyles.chatTitle}>{item.name.length < 28 ? item.name : item.name.substr(0, 25) + '...'}</Text>
                                            <Text style={ChatsStyles.chatDate}>{isToday(item.lastMsgDate) ? item.lastMsgTime : item.lastMsgDate}</Text>
                                        </View>

                                        <Text style={ChatsStyles.chatLastMsg} numberOfLines={2}>{item.lastMsg}</Text>
                                    </View>
                                </TouchableOpacity>
                            </Swipeable>
                        );
                    }}
                />
            </SafeAreaView>
        );
    }
}