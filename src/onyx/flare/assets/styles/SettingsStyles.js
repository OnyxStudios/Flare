import {StyleSheet, Dimensions} from "react-native";
import {hexToRGBA} from './../../utils/FlareUtils';
const Theme = require('./Theme');
const imageSize = Dimensions.get('window').width * 0.2;

let settings = StyleSheet.create({
    category: {
        backgroundColor: Theme.categoryColor,
        width: '100%',
        height: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: Theme.shadowColor,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        marginBottom: 50
    },
    rowCategory: {
        backgroundColor: Theme.categoryColor,
        width: '100%',
        height: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: Theme.shadowColor,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        marginBottom: 50
    },
    centeredCagegory: {
        backgroundColor: Theme.categoryColor,
        width: '100%',
        height: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Theme.shadowColor,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        marginBottom: 50
    },
    categoryHeader: {
        color: Theme.subTextColor,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginLeft: 20,
        marginBottom: 5
    },
    rowSettings: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: Theme.callBorderColor,
        borderBottomWidth: 1
    },
    settingsBtn: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: Theme.callBorderColor,
        borderBottomWidth: 1
    },
    simpleSettingsBtn: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10
    },
    profilePicContainer: {
        width: imageSize,
        height: imageSize
    },
    profilePic: {
        borderRadius: imageSize / 2,
        borderColor: Theme.profileBorderColor,
        borderWidth: 2
    },
    changeOverlay: {
        backgroundColor: 'rgba(1, 1, 1, 0.2)',
        borderRadius: imageSize / 2,
        width: imageSize,
        height: imageSize,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    changeText: {
        color: Theme.navTextColor,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    nameInput: {
        width: '70%',
        height: '60%',
        borderColor: Theme.profileBorderColor,
        padding: 5,
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    navSave: {
        color: Theme.confirmColor,
        marginRight: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    navCancel: {
        color: Theme.cancelColor,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    numberInput: {
        width: '100%',
        height: imageSize / 2,
        borderColor: Theme.profileBorderColor,
        padding: 5,
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    settingText: {
        color: Theme.textColor,
        fontSize: 16
    },
    importantText: {
        color: Theme.cancelColor,
        fontSize: 16
    },
    optionsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    settingOptions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    option: {
        width: '30%',
        padding: 5,
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5
    },
    selectedOption: {
        backgroundColor: hexToRGBA(Theme.backgroundColor, 0.4),
        borderColor: Theme.profileBorderColor,
        borderTopWidth: 2,
        borderBottomWidth: 2
    }
});

module.exports = {settings};