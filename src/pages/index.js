import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupConfirm from "../components/PopupConfirm.js";
import Api from "../components/Api.js";
import { editButton, addButton, formEdit, formAdd, inputName, inputOccupation,
    userName, userOccupation, avatarEditIcon, formAvatarEdit, userAvatar } from "../utils/constants.js";

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-32',
    token: '76c1c471-2766-4a3c-9dbb-2acf0a9ae808'
});

api.getUserData()
    .then(data => {
        userName.textContent = data.name;
        userOccupation.textContent = data.about;
        userAvatar.src = data.avatar;
    })
    .catch(error => {
        console.log(error)
    })

api.getCards()
    .then(res => {
        initialCardsList.renderItems(res.reverse());
    })
    .catch(error => {
        console.log(error)
    })

function createCard(item){
    const card = new Card(item, '.template', handleCardClick, {

        handleCardLike: () => {
        if (!item.likes.some(like => like['_id'] === '6bb60632fcf5ef9219847aa4')) {
            api.putLike(item)
                .then(res => {
                    card.updateCardLikes(res);
                    item = res;
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            api.deleteLike(item)
                .then(res => {
                    card.updateCardLikes(res);
                    item = res;
                })
                .catch(err => {
                    console.log(err)
                })
        }
        },
        // обработка удаления карточки
        handleDeleteButtonClick: () => {

            popupConfirm.open();
            popupConfirm.setSubmitAction(() => {
                api.deleteMyCard(item)
                    .then(res => {
                        console.log(res);
                        card.deleteCard();
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        } });

    const cardElement = card.generateCard();

    if (item.owner._id !== '6bb60632fcf5ef9219847aa4') {
        card.removeDeleteButton()
    }
    if (item.likes.some(like => like['_id'] === '6bb60632fcf5ef9219847aa4')) {
        card.activateLikeButton()
    }

    return cardElement;
}

const popupConfirm = new PopupConfirm({
    popupSelector: '.popup_type_confirm'
});
popupConfirm.setEventListeners();


const initialCardsList = new Section({
    renderer: (item) => {
        initialCardsList.addItem(createCard(item));
    }},
    '.cards');

const popupAdd = new PopupWithForm({
    popupSelector: '.popup_type_add',
    handleFormSubmit: (formData) => {
        popupAdd.renderLoading(true);
        api.addNewCard(formData)
            .then(res => {
                initialCardsList.addItem(createCard(res))
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                popupAdd.renderLoading(false);
            })
    }
});
popupAdd.setEventListeners();

addButton.addEventListener('click', () => {
    popupAdd.open();
    formAddValidator.resetForm();
});

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    occupationSelector: '.profile__occupation',
    avatarContainerSelector: '.profile__avatar-container'
});
userInfo.displayEditAvatarIcon();

const popupEdit = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    handleFormSubmit: (formData) => {
        popupEdit.renderLoading(true);
        api.editUserData(formData)
            .then(res => {
                userInfo.setUserInfo(res)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                popupEdit.renderLoading(false);
            })
    }
});
popupEdit.setEventListeners();

editButton.addEventListener('click', () => {
    inputName.value = userInfo.getUserInfo().name;
    inputOccupation.value = userInfo.getUserInfo().occupation;
    formEditValidator.resetForm();
    popupEdit.open();
});

const popupAvatar = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleFormSubmit: (formData) => {
        popupAvatar.renderLoading(true);
        api.editUserAvatar(formData)
            .then(res => {
                userInfo.setNewAvatar(res);
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                popupAvatar.renderLoading(false);
            })
    }
});
popupAvatar.setEventListeners();

avatarEditIcon.addEventListener('click', () => {
    formAvatarEditValidator.resetForm();
    popupAvatar.open();
})

const popupWithImage = new PopupWithImage('.popup_type_picture');
popupWithImage.setEventListeners();

function handleCardClick(cardData) {
    console.log(cardData);
    popupWithImage.open(cardData);
}

//валидация
const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
}

const formEditValidator = new FormValidator(validationConfig, formEdit);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAdd);
formAddValidator.enableValidation();

const formAvatarEditValidator = new FormValidator(validationConfig, formAvatarEdit);
formAvatarEditValidator.enableValidation();