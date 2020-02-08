import {Dimensions, StyleSheet} from "react-native";
import {Header} from "react-navigation-stack";

const Theme = require('./Theme');
const imageSize = Dimensions.get('window').width * 0.15;
const sectionsPerPage = 8;

let chats = StyleSheet.create({
    chatContainer: {
        width: '100%',
        height: (Dimensions.get('window').height - (Header.HEIGHT * 2)) / sectionsPerPage,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '4%',
        borderBottomColor: Theme.callBorderColor,
        borderBottomWidth: 1
    },
    chatIcon: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    },
    chatData: {
        display: 'flex',
        flexDirection: 'column',
        width: Dimensions.get('window').width * 0.92 - (imageSize + 10),
        marginLeft: 10
    },
    chatHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    chatTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Theme.textColor
    },
    chatDate: {
        color: Theme.subTextColor,
        fontSize: 14
    },
    chatLastMsg: {
        color: Theme.subTextColor,
        fontSize: 14
    }
});

module.exports = {chats};