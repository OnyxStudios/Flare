import {observable, action} from "mobx/lib/mobx";
import {storeData} from './../utils/StorageUtils';

class ObservableWallpaperStore {
    @observable wallpaper = '';

    @action
    changeWallpaper(location) {
        storeData('wallpaper', location).then(val => {this.wallpaper = location});
    }

    @action
    loadWallpaper(location) {
        this.wallpaper = location;
    }

    @action
    removeWallpaper() {
        this.wallpaper = '';
        storeData('wallpaper', '').then(val => {this.wallpaper = ''});
    }
}

const observableWallpaperStore = new ObservableWallpaperStore();
export default observableWallpaperStore;