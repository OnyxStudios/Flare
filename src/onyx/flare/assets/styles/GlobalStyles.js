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
        fontSize: 22
    },
    deleteSwipe: {
        backgroundColor: Theme.deleteColor,
        justifyContent: 'center',
        height: '100%',
        paddingLeft: 15
    }
});

module.exports = {global};