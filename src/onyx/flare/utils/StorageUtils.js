import * as SecureStore from 'expo-secure-store/build/SecureStore';

async function storeData(key, value) {
    try {
        if(SecureStore.getItemAsync(key) !== null) {
            await SecureStore.deleteItemAsync(key).then(val => SecureStore.setItemAsync(key, value));
        }else {
            await SecureStore.setItemAsync(key, value);
        }
    }catch (e) {
        console.error(e);
    }
}

async function getData(key) {
    return await SecureStore.getItemAsync(key);
}

async function deleteData(key) {
    SecureStore.deleteItemAsync(key);
}

module.exports = {
    storeData,
    getData,
    deleteData
};