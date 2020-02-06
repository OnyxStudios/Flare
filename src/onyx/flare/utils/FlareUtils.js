function isToday(date) {
    const today = new Date();
    let month = date.split('/')[0];
    let day = date.split('/')[1];
    let year = '20' + date.split('/')[2];

    return today.getDate() == day && today.getMonth() +1 == month && today.getFullYear() == year;
}

module.exports = {
    isToday
};