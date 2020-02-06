import {StyleSheet, Dimensions} from "react-native";
import {Header} from "react-navigation-stack";
const Theme = require('./Theme');
const sectionsPerPage = 12;

let calls = StyleSheet.create({
    callSection: {
        width: '92%',
        marginLeft: '4%',
        height: (Dimensions.get('window').height - (Header.HEIGHT * 2)) / sectionsPerPage,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: Theme.callBorderColor,
        borderBottomWidth: 1
    },
    callInfo: {
        display: 'flex',
        flexDirection: 'column'
    },
    callDate: {
        color: Theme.subTextColor,
        fontSize: 14
    },
    callTitle: {
        color: Theme.textColor,
        fontSize: 16
    },
    missedTitle: {
        color: Theme.missedCallColor,
        fontSize: 16
    },
    subText: {
        color: Theme.subTextColor,
        fontSize: 14
    }
});

module.exports = {calls};