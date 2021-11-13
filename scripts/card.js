import {keyEscHandler} from './index.js';
const popupPic = document.querySelector('.popup_type_picture');
const popupImg = popupPic.querySelector('.popup__image');
const popupCaption = popupPic.querySelector('.popup__figcaption');
const popupCloseButtonPic = document.querySelector('.popup__close-button_type_pic');

export class Card {
    constructor(data, selector) {
        this._name = data.name;
        this._image = data.link;
        this._selector = selector;
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
    event.target.closest('.card').remove();
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

_handleOpenPopup() {
        popupPic.classList.add('popup_opened');
        popupImg.src = this._image;
        popupCaption.textContent = this._name;

    document.addEventListener('keydown', keyEscHandler);
}

_handleClosePopup() {
        popupPic.classList.remove('popup_opened');
        popupImg.scr = '';
        popupCaption.textContent = '';

    document.removeEventListener('keydown', keyEscHandler);
}

}