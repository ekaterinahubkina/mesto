class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._popupOpened = document.querySelector('.popup_opened');
        this._closeButton = this._popup.querySelector('.popup__close-button');
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (event) => {
        if(event.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClickClose = (event) => {
        if (event.target.classList.contains('popup_opened')){
            this.close(event.target);
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', (event) => {
            this.close(this._popupOpened);
        });
        this._popup.addEventListener('click', this._handleOverlayClickClose);

    }
}

export default Popup;