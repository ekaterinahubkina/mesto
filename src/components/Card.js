class Card {
    constructor(data, selector, handleCardClick, { handleCardLike, handleDeleteButtonClick }) {
        this._name = data.name;
        this._image = data.link;
        this._likesNumber = data.likes.length;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteButtonClick = handleDeleteButtonClick;
        this._handleCardLike = handleCardLike;
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

        this._element.querySelector('.card__likes-number').textContent = this._likesNumber;

        return this._element;
}

_setEventListeners() {

        const cardDeleteButton = this._element.querySelector('.card__delete-button');
        cardDeleteButton.addEventListener('click', () => {
            this._handleDeleteButtonClick(this);
        });

        const cardLikeButton = this._element.querySelector('.card__like-button');
        cardLikeButton.addEventListener('click', () => {
            this._handleCardLike(this);
        });
         this._element.querySelector('.card__image').addEventListener('click', () => {
             this._handleCardClick({name: this._name, link: this._image});
         });
}

handleLikeButtonClick() {
        this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
}

activateLikeButton() {
        this._element.querySelector('.card__like-button').classList.add('card__like-button_active');
}
deleteCard() {
        this._element.remove();
        this._element = null;
}

removeDeleteButton() {
    this._element.querySelector('.card__delete-button').remove();
}
updateCardLikes(data) {
    this._element.querySelector('.card__likes-number').textContent = data.likes.length;
}
}

export default Card;