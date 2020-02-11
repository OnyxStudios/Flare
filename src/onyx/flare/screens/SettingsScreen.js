import React from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ImageBackground,
    Switch,
    Platform,
    Alert
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {global as GlobalStyles} from './../assets/styles/GlobalStyles';
import {LinearGradient} from "expo-linear-gradient";
import {settings as SettingsStyles} from "./../assets/styles/SettingsStyles";
import {inject} from "mobx-react";
const Theme = require('./../assets/styles/Theme');

//TODO: Temporary until database and backend is stored so i can retrieve data
let userData = {
    profilePic: 'https://cdn.discordapp.com/avatars/185789074873778177/2371bf4c9c12be3eb76f53be525cec8b.png',
    name: 'Mohammad',
    number: '+1 (313) 548-1568'
};

@inject('wallpaperStore')
export default class SettingsScreen extends React.Component {
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
        notifications: true,
        theme: '',
        themeOptionsOpen: false,
        backgroundsOptionOpen: false
    };

    componentDidMount() {
        this.props.navigation.setParams({saveData: this.saveData, cancelChanges: this.cancelChanges, changes: false});
        this.setState({name: userData.name, changes: false, theme: 'light'});
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

    setTheme = (newTheme) => {
        let {theme} = this.state;
        if(newTheme !== theme)
            this.setState({theme: newTheme});
    };

    handleThemes = () => {
        let {themeOptionsOpen} = this.state;
        this.setState({themeOptionsOpen: !themeOptionsOpen});
    };

    handleChatBackgrounds = () => {
        let {backgroundsOptionOpen} = this.state;
        this.setState({backgroundsOptionOpen: !backgroundsOptionOpen});
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: Platform.OS !== 'ios',
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            this.props.wallpaperStore.changeWallpaper(result.uri);
            Alert.alert('Success', 'Successfully Changed Wallpaper!', [{text: 'OK'}], {cancelable: false});
        }
    };

    clearWallpaper = () => {
        this.props.wallpaperStore.removeWallpaper();
        Alert.alert('Success', 'Successfully Cleared Wallpaper!', [{text: 'OK'}], {cancelable: false});
    };

    render() {
        let {name, autoSave, notifications, themeOptionsOpen, theme, backgroundsOptionOpen} = this.state;

        return (
            <ScrollView style={{flex: 1}} >
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

                    <View style={SettingsStyles.optionsContainer}>
                        <TouchableOpacity style={SettingsStyles.settingsBtn} onPress={this.handleChatBackgrounds}><Text style={SettingsStyles.settingText}>Chats Wallpaper</Text></TouchableOpacity>
                        {backgroundsOptionOpen ?
                            <View style={SettingsStyles.settingOptions}>
                                <TouchableOpacity style={[SettingsStyles.threeOptions, SettingsStyles.borderSides]} onPress={() => this.props.navigation.navigate('Wallpaper')}><Text style={SettingsStyles.settingText}>Wallpaper Presets</Text></TouchableOpacity>
                                <TouchableOpacity style={[SettingsStyles.threeOptions, SettingsStyles.borderSides]} onPress={() => this.pickImage()}><Text style={SettingsStyles.settingText}>Custom Photos</Text></TouchableOpacity>
                                <TouchableOpacity style={[SettingsStyles.threeOptions, SettingsStyles.borderSides]} onPress={() => this.clearWallpaper()}><Text style={SettingsStyles.settingText}>Clear Wallpaper</Text></TouchableOpacity>
                            </View> : null}
                    </View>

                    <View style={SettingsStyles.optionsContainer}>
                        <TouchableOpacity style={SettingsStyles.settingsBtn} onPress={this.handleThemes}><Text style={SettingsStyles.settingText}>Change Theme</Text></TouchableOpacity>
                        {themeOptionsOpen ?
                        <View style={SettingsStyles.settingOptions}>
                            <TouchableOpacity onPress={() => this.setTheme('light')} style={[SettingsStyles.threeOptions, theme === 'light' ? SettingsStyles.selectedOption : null]}><Text style={SettingsStyles.settingText}>Light</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setTheme('dark')} style={[SettingsStyles.threeOptions, theme === 'dark' ? SettingsStyles.selectedOption : null]}><Text style={SettingsStyles.settingText}>Dark</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setTheme('black')} style={[SettingsStyles.threeOptions, theme === 'black' ? SettingsStyles.selectedOption : null]}><Text style={SettingsStyles.settingText}>Black</Text></TouchableOpacity>
                        </View> : null }
                    </View>
                </View>

                <Text style={SettingsStyles.categoryHeader}>Account</Text>
                <View style={SettingsStyles.category}>
                    <TouchableOpacity style={SettingsStyles.settingsBtn}><Text style={SettingsStyles.importantText}>Clear All Chats</Text></TouchableOpacity>
                    <TouchableOpacity style={SettingsStyles.settingsBtn}><Text style={SettingsStyles.importantText}>Log Out</Text></TouchableOpacity>
                </View>

                <Text style={SettingsStyles.categoryHeader}>Legal</Text>
                <View style={SettingsStyles.category}>
                    <TouchableOpacity style={SettingsStyles.settingsBtn}><Text style={SettingsStyles.settingText}>Terms of Service</Text></TouchableOpacity>
                    <TouchableOpacity style={SettingsStyles.settingsBtn}><Text style={SettingsStyles.settingText}>Privacy Policy</Text></TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}