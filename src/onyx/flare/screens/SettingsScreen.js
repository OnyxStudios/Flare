import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, TextInput, ImageBackground, Switch} from "react-native";
import {global as GlobalStyles} from './../assets/styles/GlobalStyles';
import {LinearGradient} from "expo-linear-gradient";
import {settings as SettingsStyles} from "./../assets/styles/SettingsStyles";
const Theme = require('./../assets/styles/Theme');

//TODO: Temporary until database and backend is stored so i can retrieve data
let userData = {
    profilePic: 'https://cdn.discordapp.com/avatars/185789074873778177/2371bf4c9c12be3eb76f53be525cec8b.png',
    name: 'Mohammad',
    number: '+1 (313) 548-1568'
};

export default class CallsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: <Text style={GlobalStyles.headerText}>Settings</Text>,
        headerBackground: () => (<LinearGradient colors={[Theme.gradientColorLeft, Theme.gradientColorRight]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 1}} />),
        headerStyle: GlobalStyles.navigationHeader,
        headerRight: () => (navigation.getParam('changes') ? <TouchableOpacity onPress={navigation.getParam('saveData')}><Text style={SettingsStyles.navSave}>Save</Text></TouchableOpacity> : null),
        headerLeft: () => (navigation.getParam('changes') ? <TouchableOpacity onPress={navigation.getParam('cancelChanges')}><Text style={SettingsStyles.navCancel}>Cancel</Text></TouchableOpacity> : null)
    });

    state = {
        name: '',
        changes: false,
        autoSave: true,
        notifications: true
    };

    componentDidMount() {
        this.props.navigation.setParams({saveData: this.saveData, cancelChanges: this.cancelChanges, changes: false});
        this.setState({name: userData.name, changes: false});
    }

    saveData = () => {
        //TODO SAVE OPTIONS TO SERVER
    };

    changeImage = () => {
        //TODO CHANGE IMAGE
    };

    cancelChanges = () => {
        this.componentDidMount();
    };

    changeSettings = () => {
        let {changes} = this.state;

        if(!changes) {
            this.setState({changes: true});
            this.props.navigation.setParams({changes: true});
        }
    };

    setAutoSave = () => {
        let {autoSave} = this.state;
        this.setState({autoSave: !autoSave});
        //TODO SAVE OPTIONS TO LOCAL STORAGE
    };

    setNotifications = () => {
        let {notifications} = this.state;
        this.setState({notifications: !notifications});
        //TODO SAVE OPTIONS TO LOCAL STORAGE
    };

    updateName = (text) => {
        this.setState({name: text});
        this.changeSettings();
    };

    render() {
        let {name, autoSave, notifications} = this.state;

        return(
            <ScrollView style={{flex: 1}}>
                <View style={SettingsStyles.rowCategory}>
                    <ImageBackground source={{uri: userData.profilePic}} style={SettingsStyles.profilePicContainer} imageStyle={SettingsStyles.profilePic}>
                        <TouchableOpacity style={SettingsStyles.changeOverlay} onPress={this.changeImage}><Text style={SettingsStyles.changeText}>CHANGE</Text></TouchableOpacity>
                    </ImageBackground>
                    <TextInput style={SettingsStyles.nameInput} returnKeyType='done' onChangeText={(text) => this.updateName(text)} value={name} />
                </View>

                <Text style={SettingsStyles.categoryHeader}>Phone Number</Text>
                <View style={SettingsStyles.centeredCagegory}>
                    <TextInput style={SettingsStyles.numberInput} value={userData.number} editable={false} />
                </View>

                <Text style={SettingsStyles.categoryHeader}>Media</Text>
                <View style={SettingsStyles.category}>
                    <View style={SettingsStyles.rowSettings}>
                        <Text style={SettingsStyles.settingText}>Auto Save Images</Text>
                        <Switch onValueChange={this.setAutoSave} value={autoSave} />
                    </View>

                    <View style={SettingsStyles.rowSettings}>
                        <Text style={SettingsStyles.settingText}>Receive Notifications</Text>
                        <Switch onValueChange={this.setNotifications} value={notifications} />
                    </View>
                </View>

                <Text style={SettingsStyles.categoryHeader}>Account</Text>
                <View style={SettingsStyles.category}>
                    <TouchableOpacity style={SettingsStyles.settingsBtn}><Text style={SettingsStyles.importantText}>Clear All Chats</Text></TouchableOpacity>
                    <TouchableOpacity style={SettingsStyles.settingsBtn}><Text style={SettingsStyles.importantText}>Log Out</Text></TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}