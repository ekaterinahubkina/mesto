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
        cardDeleteButton.addEventListener('click', () => {
            this._deleteCard();
        });

        const cardLikeButton = this._element.querySelector('.card__like-button');
        cardLikeButton.addEventListener('click', () => {
            this._handleLikeButtonClick();
        });
         this._element.querySelector('.card__image').addEventListener('click', () => {
             this._handleCardClick({name: this._name, link: this._image});
         });
}

_handleLikeButtonClick() {
        this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
}

_deleteCard() {
        this._element.remove();
        this._element = null;
}

}

export default Card;