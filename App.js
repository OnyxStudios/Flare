import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {MainStack, SignInStack} from './src/onyx/flare/AppNavigation';
import LoadingScreen from './src/onyx/flare/screens/LoadingScreen';
import {Provider} from "mobx-react";
import observableWallpaperStore from './src/onyx/flare/mobx/WallpaperStore';

let AppContainer = createAppContainer(createSwitchNavigator(
    {
        Loading: LoadingScreen,
        Main: MainStack,
        Welcome: SignInStack
    },
    {
        initialRouteName: 'Loading'
    }
));

export default class App extends React.Component {

    render() {
        return (
            <Provider wallpaperStore={observableWallpaperStore}>
                <AppContainer/>
            </Provider>
        );
    }
}