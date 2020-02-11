import React from 'react';
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, Modal, View, ImageBackground, Alert} from "react-native";
 import {global as GlobalStyles} from "../assets/styles/GlobalStyles";
import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import {wallpaper as WallpaperStyles} from "../assets/styles/WallpaperPresetsStyles";
import {WALLPAPERS} from './../utils/Images';
import {conversation as ConversationStyles} from "../assets/styles/ConversationStyles";
import {hexToRGBA} from "../utils/FlareUtils";
import {inject} from "mobx-react";
const Theme = require('./../assets/styles/Theme');

@inject('wallpaperStore')
export default class WallpaperPresetsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: <Text style={GlobalStyles.headerText}>Wallpapers</Text>,
        headerBackground: () => (<LinearGradient colors={[Theme.gradientColorLeft, Theme.gradientColorRight]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 1}} />),
        headerStyle: GlobalStyles.navigationHeader,
        headerLeft: () => <TouchableOpacity style={WallpaperStyles.backArrow} onPress={navigation.getParam('exitPresets')}><Ionicons name='ios-arrow-back' size={30} color={Theme.navTextColor}/></TouchableOpacity>
    });

    state = {
        wallpaperPreview: false,
        previewID: ''
    };

    componentDidMount() {
        this.props.navigation.setParams({exitPresets: this.exitPresets});
    }

    exitPresets = () => {
        this.props.navigation.goBack();
    };

    setWallpaper = () => {
        let {previewID} = this.state;
        this.props.wallpaperStore.changeWallpaper(previewID);
        Alert.alert('Success', 'Successfully Changed Wallpaper!', [{text: 'OK', onPress: () => this.setState({wallpaperPreview: false})}], {cancelable: false});
    };

    render() {
        let {wallpaperPreview, previewID} = this.state;

        return (
            <SafeAreaView style={WallpaperStyles.previewsContainer}>
                <Modal animationType='slide' transparent={false} visible={wallpaperPreview} onRequestClose={() => this.setState({wallpaperPreview: false})}>
                    <ImageBackground style={WallpaperStyles.modal} source={WALLPAPERS[previewID]}>
                        <View style={WallpaperStyles.previewTop}>
                            <View style={WallpaperStyles.previewTitleContainer}><Text style={WallpaperStyles.previewTitle}>Wallpaper Preview</Text></View>

                            <View style={{width: '100%', height: 'auto'}}>
                                <View style={ConversationStyles.messageContainerLeft}>
                                    <View style={ConversationStyles.messageLeft}>
                                        <Text style={{color: Theme.textColor, fontSize: 16}}>This is a preview of what the wallpaper would look like when applied!</Text>
                                        <Text style={{marginLeft: 'auto', color: Theme.subTextColor, paddingTop: 5, fontSize: 12}}>1/1/20</Text>
                                    </View>
                                </View>

                                <View style={ConversationStyles.messageContainerRight}>
                                    <LinearGradient style={ConversationStyles.messageRight} colors={[hexToRGBA(Theme.gradientColorLeft, 0.7), hexToRGBA(Theme.gradientColorRight, 0.7)]} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                                        <Text style={{color: Theme.navTextColor, fontSize: 16}}>This is a preview of what the wallpaper would look like when applied!</Text>
                                        <Text style={{marginLeft: 'auto', color: Theme.navTextColor, paddingTop: 5, fontSize: 12}}>1/1/20</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>

                        <View style={WallpaperStyles.options}>
                            <TouchableOpacity style={[WallpaperStyles.btn, {borderRightWidth: 2}]} onPress={() => this.setState({wallpaperPreview: false})}>
                                <Text style={WallpaperStyles.btnTitle}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={WallpaperStyles.btn} onPress={() => this.setWallpaper()}><Text style={WallpaperStyles.btnTitle}>Set</Text></TouchableOpacity>
                        </View>
                    </ImageBackground>
                </Modal>

                <FlatList
                    data={Object.keys(WALLPAPERS)}
                    numColumns={3}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={WallpaperStyles.preview} onPress={() => this.setState({wallpaperPreview: true, previewID: item})}>
                                <Image style={WallpaperStyles.previewImage} source={WALLPAPERS[item]} />
                            </TouchableOpacity>
                        );
                    }}
                />
            </SafeAreaView>
        );
    }
}