import {StyleSheet} from "react-native";
import {Header} from "react-navigation-stack";
const Theme = require('./Theme');
const iconSize = Header.HEIGHT / 2;

let conversation = StyleSheet.create({
    icon: {
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize / 2,
        marginRight: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
        color: Theme.navTextColor
    },
    callFeatures: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10
    },
    backArrow: {
        marginLeft: 10,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    features: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2
    },
    messageOptions: {
        width: '100%',
        paddingBottom: 20,
        paddingTop: 10,
        backgroundColor: Theme.categoryColor,
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    messageBox: {
        width: '75%',
        maxHeight: 120,
        minHeight: 30,
        borderColor: Theme.gradientColorLeft,
        borderRadius: 20,
        borderWidth: 3,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    keyboardContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    messageContainerLeft: {
        width: '100%',
        display: 'flex'
    },
    messageContainerRight: {
        width: '100%',
        display: 'flex'
    },
    messageRight: {
        maxWidth: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        marginLeft: 'auto'
    },
    messageLeft: {
        maxWidth: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        marginRight: 'auto',
        backgroundColor: Theme.categoryColor,
        shadowColor: Theme.shadowColor,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    messageFeature: {
        height: 32,
        width: 32,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

module.exports = {conversation};