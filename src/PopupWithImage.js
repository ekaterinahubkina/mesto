import Popup from "./Popup.js";
import { popupImg, popupCaption } from "./constants.js";

class PopupWithImage extends Popup{
    constructor(data, popupSelector) {
        super(popupSelector);
        this._data = data;
        // this._name = data.name;
        // this._image = data.link;

    }

    open = () => {
        super.open();
        // this._data.forEach((item) => {
        //     popupImg.src = item.link;
        //     popupCaption.textContent = item.name;
        // })
        popupImg.src = this._data.link;
        popupCaption.textContent = this._data.name;
    }
}

export default PopupWithImage;