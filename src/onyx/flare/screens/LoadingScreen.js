import React from 'react';
import {ImageBackground} from 'react-native';
import {getData} from './../utils/StorageUtils';
import {WALLPAPERS} from './../utils/Images';
import {inject, observer} from "mobx-react";

@inject('wallpaperStore')
@observer
export default class LoadingScreen extends React.Component {
    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this._loadAsync();
    }

    _loadAsync = async () => {
        console.disableYellowBox = true;
        getData('wallpaper').then(value => {
            this.props.wallpaperStore.loadWallpaper(value);
        });
        getData('showWelcome').then(value => {
            this.props.navigation.navigate(value === 'false' ? 'Main' : 'Welcome');
        });
    };

    render() {
        return(<ImageBackground source={WALLPAPERS['DEFAULT_SPLASH']} style={{flex: 1, width: '100%', height: '100%'}} />);
    }
}