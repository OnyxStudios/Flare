import {StyleSheet} from "react-native";
const Theme = require('./Theme');

const global = StyleSheet.create({
    navigationBar: {
        backgroundColor: Theme.navBackgroundColor,
        borderTopColor: Theme.navBorderColor,
        borderTopWidth: 3
    },
    navigationHeader: {
        backgroundColor: Theme.navBackgroundColor,
        borderBottomColor: Theme.navBorderColor,
        borderBottomWidth: 3
    },
    headerText: {
        color: Theme.textColor,
        fontFamily: 'Arial',
        fontSize: 22
    },
});

module.exports = {global};