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
        marginLeft: 10
    },
    headerTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2
    }
});

module.exports = {conversation};