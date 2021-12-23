import Popup from "./Popup.js";
import { popupImg, popupCaption } from "../utils/constants.js";

class PopupWithImage extends Popup{

    open(data) {
        console.log(data);
        popupImg.src = data.link;
        popupImg.alt = data.name;
        popupCaption.textContent = data.name;
        super.open();
    }
}

export default PopupWithImage;