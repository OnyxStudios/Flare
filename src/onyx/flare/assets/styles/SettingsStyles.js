import {StyleSheet, Dimensions} from "react-native";
const Theme = require('./Theme');
const imageSize = Dimensions.get('window').width * 0.2;

let settings = StyleSheet.create({
    profilePic: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        borderColor: Theme.profileBorderColor,
        borderWidth: 2
    }
});

module.exports = {settings};