class Card {
    constructor(data, selector, handleCardClick) {
        this._name = data.name;
        this._image = data.link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
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
         this._element.querySelector('.card__image').addEventListener('click', (event) => {
             this._handleCardClick(this._getCardInfo());
         });
}

_handleLikeButtonClick() {
        this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
}

_getCardInfo() {
        this._cardInfo = {};
        this._cardInfo.name = this._name;
        this._cardInfo.link = this._image;
        return this._cardInfo;
}
}

export default Card;