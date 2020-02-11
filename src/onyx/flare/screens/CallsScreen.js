import React from 'react';
import {Text, View, FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {FontAwesome} from '@expo/vector-icons';
import {global as GlobalStyles} from './../assets/styles/GlobalStyles';
import {calls as CallsStyles} from './../assets/styles/CallsStyles';
import {isToday} from './../utils/FlareUtils';
import Swipeable from "react-native-swipeable-row";
const Theme = require('./../assets/styles/Theme');

let tempData = [
    {
        name: 'Steve',
        number: '(313) 546-1218',
        callType: 'voice',
        callStatus: {
            type: 'Outgoing',
            callAmount: 2,
            missedAmount: 0
        },
        date: '2/5/20',
        time: '1:15PM',
        callId: '213548',
    },
    {
        name: 'Calvin',
        number: '(313) 546-1218',
        callType: 'video',
        callStatus: {
            type: 'Incoming',
            callAmount: 1,
            missedAmount: 0
        },
        date: '2/6/20',
        time: '2:15PM',
        callId: '215548'
    },
    {
        name: 'Player',
        number: '(313) 546-1218',
        callType: 'video',
        callStatus: {
            type: 'Missed',
            callAmount: 2,
            missedAmount: 2
        },
        date: '2/6/20',
        time: '2:50PM',
        callId: '265548'
    },
    {
        name: '',
        number: '(313) 546-1218',
        callType: 'voice',
        callStatus: {
            type: 'Missed',
            callAmount: 5,
            missedAmount: 5
        },
        date: '2/2/20',
        time: '2:15PM',
        callId: '158748'
    }
];

export default class CallsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: <Text style={GlobalStyles.headerText}>Calls</Text>,
        headerBackground: () => (<LinearGradient colors={[Theme.gradientColorLeft, Theme.gradientColorRight]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 1}} />),
        headerStyle: GlobalStyles.navigationHeader,
        headerRight: () => <TouchableOpacity style={CallsStyles.callUser} onPress={navigation.getParam('callUser')}><FontAwesome name='phone' size={30} color={Theme.navTextColor} /></TouchableOpacity>
    });

    state = {
        swiping: false
    };

    componentDidMount() {
        this.props.navigation.setParams({callUser: this.callUser});
    }

    formatCallerTitle = (caller) => {
        let name = caller.name ? caller.name : caller.number;
        let missed = caller.callStatus.missedAmount > 1 ? '(' + caller.callStatus.missedAmount + ')' : '';
        let called = caller.callStatus.callAmount > 1 && caller.callStatus.missedAmount <= 0 ? '(' + caller.callStatus.callAmount+ ')' : '';

        return <Text style={caller.callStatus.missedAmount > 0 ? CallsStyles.missedTitle : CallsStyles.callTitle}>{name + '  ' + missed + called}</Text>;
    };

    callUser = () => {
    };

    setSwiping = () => {
        let {swiping} = this.state;
        this.setState({swiping: !swiping});
    };

    deleteCall = (callID) => {
        console.log("Pressed Delete! " + callID)
    };

    DeleteButton = (callID) => {
        return <TouchableOpacity onPress={() => this.deleteCall(callID)} style={GlobalStyles.deleteSwipe}><Text style={{color: Theme.navTextColor, fontSize: 16}}>Delete</Text></TouchableOpacity>;
    };

    render() {
        let {swiping} = this.state;

        return(
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={tempData}
                    numColumns={1}
                    keyExtractor={(item) => item.callId}
                    scrollEnabled={!swiping}
                    renderItem={({item}) => {
                        return(
                            <Swipeable rightButtons={[this.DeleteButton(item.callId)]} onSwipeStart={this.setSwiping} onSwipeRelease={this.setSwiping}>
                                <TouchableOpacity style={CallsStyles.callSection} onPress={null}>
                                    <View style={CallsStyles.callInfo}>
                                        {this.formatCallerTitle(item)}
                                        <Text style={CallsStyles.subText}><FontAwesome name={item.callType == 'voice' ? 'phone' : 'video-camera'} size={12} color={Theme.iconColor}/> {item.callStatus.type}</Text>
                                    </View>

                                    <Text style={CallsStyles.callDate}>{isToday(item.date) ? item.time : item.date}</Text>
                                </TouchableOpacity>
                            </Swipeable>
                        );
                    }}
                />
            </SafeAreaView>
        );
    }
}