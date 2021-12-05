import Popup from "./Popup.js";
import { popupImg, popupCaption } from "../utils/constants.js";

class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(data) {
        super.open();
        popupImg.src = data.link;
        popupImg.alt = data.name;
        popupCaption.textContent = data.name;
    }
}

export default PopupWithImage;