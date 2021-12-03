import { popupPic, popupImg, popupCaption,popupCloseButtonPic } from "./constants.js";
class Card {
    constructor(data, selector) {
        this._name = data.name;
        this._image = data.link;
        this._selector = selector;
        // this._openPopup = openPopup;
        // this._closePopup = closePopup;
}
_getTemplate() {
        const cardElement = document
            .querySelector(this._selector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardElement;
}
generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        const cardImg = this._element.querySelector('.card__image');


        this._element.querySelector('.card__title').textContent = this._name;
        cardImg.src = this._image;
        cardImg.alt = this._name;

        return this._element;
}

_setEventListeners() {

        const cardDeleteButton = this._element.querySelector('.card__delete-button');
        cardDeleteButton.addEventListener('click', (event) => {
            this._element.remove();
        });

        const cardLikeButton = this._element.querySelector('.card__like-button');
        cardLikeButton.addEventListener('click', () => {
            this._handleLikeButtonClick();
        });
        this._element.querySelector('.card__image').addEventListener('click', () => {
            this._handleOpenPopup();
        });
        popupCloseButtonPic.addEventListener('click', () => {
            this._handleClosePopup();
        });

}


_handleLikeButtonClick() {
        this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
}
//
// _handleOpenPopup() {
//         this._openPopup(popupPic);
//         popupImg.src = this._image;
//         popupCaption.textContent = this._name;
// }
//
// _handleClosePopup() {
//         this._closePopup(popupPic);
//         popupImg.scr = '';
//         popupCaption.textContent = '';
//}

}

export default Card;