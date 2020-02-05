import React from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {MainStack, SignInStack} from './src/onyx/flare/AppNavigation';
import {getData} from './src/onyx/flare/utils/StorageUtils';
import {DEFAULT_SPLASH} from './src/onyx/flare/utils/Images';

class App extends React.Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this._loadAsync();
    }

    _loadAsync = async () => {
        //TODO Load User Data + Check if they're authenticated or not, if not then show welcome
        getData('showWelcome').then(value => {
          this.props.navigation.navigate(value === 'false' ? 'Main' : 'Welcome');
        });
    };

    render() {
        return(
            null
        );
    }
}

export default createAppContainer(createSwitchNavigator(
    {
      Loading: App,
      Main: MainStack,
      Welcome: SignInStack
    },
    {
      initialRouteName: 'Loading'
    }
));