import {StyleSheet} from "react-native";
const Theme = require('./Theme');

let global = StyleSheet.create({
    navigationBar: {
        backgroundColor: Theme.navBottomColor,
        borderTopColor: Theme.navBorderColor,
        borderTopWidth: 1
    },
    navigationHeader: {
        borderBottomColor: Theme.navBorderColor,
        borderBottomWidth: 1
    },
    headerText: {
        color: Theme.navTextColor,
        fontFamily: 'Arial',
        fontSize: 22
    },
});

module.exports = {global};