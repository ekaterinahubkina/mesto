import Popup from "./Popup";

class PopupConfirm extends Popup{
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit();
            this.close();
        })
    }

    setSubmitAction(action) {
        this._handleFormSubmit = action;
    }
}

export default PopupConfirm;