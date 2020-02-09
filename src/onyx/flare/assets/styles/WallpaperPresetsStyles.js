import {StyleSheet, Dimensions} from "react-native";
let previewWidth = '30%';
let previewHeight = (Dimensions.get('window').height/ 3) - 40;
const Theme = require('./Theme');

const wallpaper = StyleSheet.create({
    backArrow: {
        marginLeft: 10,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    previewsContainer: {
        width: '100%',
        height: '100%'
    },
    preview: {
        width: previewWidth,
        height: previewHeight,
        marginLeft: '2.5%',
        marginTop: 10
    },
    previewImage: {
        width: '100%',
        height: '100%'
    },
    modal: {
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    options: {
        width: '100%',
        backgroundColor: Theme.backgroundColor,
        display: 'flex',
        flexDirection: 'row'
    },
    btn: {
        width: '50%',
        paddingTop: 15,
        paddingBottom: 45,
        alignItems: 'center',
        borderColor: Theme.callBorderColor
    },
    btnTitle: {
        color: Theme.textColor,
        fontSize: 18
    },
    previewTitle: {
        paddingTop: 45,
        paddingBottom: 10,
        color: Theme.textColor,
        fontSize: 26
    },
    previewTitleContainer: {
        backgroundColor: Theme.callBorderColor,
        alignItems: 'center'
    },
    previewTop: {
        width: '100%',
        height: 'auto'
    }
});

module.exports = {wallpaper};