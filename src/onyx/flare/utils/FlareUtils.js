function isToday(date) {
    const today = new Date();
    let month = date.split('/')[0];
    let day = date.split('/')[1];
    let year = '20' + date.split('/')[2];

    return today.getDate() == day && today.getMonth() +1 == month && today.getFullYear() == year;
}

function hexToRGBA(hex, alphaVal) {
    let r = parseInt(cutHex(hex).substring(0, 2),16);
    let g = parseInt(cutHex(hex).substring(2, 4),16);
    let b = parseInt(cutHex(hex).substring(4, 6),16);

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alphaVal + ')';
}

function cutHex(hex) {
    return hex.charAt(0) == "#" ? hex.substring(1,7) : hex;
}

module.exports = {
    isToday,
    hexToRGBA
};