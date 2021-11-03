const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupCloseButtonEdit = document.querySelector('.popup__close-button_type_edit');
const popupCloseButtonAdd = document.querySelector('.popup__close-button_type_add');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button'); 


const formAdd = document.querySelector('.form_type_add');
const inputTitle = document.querySelector('.form__input_type_title');
const inputLink = document.querySelector('.form__input_type_link');

const formEdit = document.querySelector('.form_type_edit');
const profileName = document.querySelector('.profile__name');
const inputName = document.querySelector('.form__input_type_name');
const profileOccupation = document.querySelector('.profile__occupation');
const inputOccupation = document.querySelector('.form__input_type_occupation');

const popupPic = document.querySelector('.popup_type_picture');
const popupImg = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__figcaption');
const popupCloseButtonPic = document.querySelector('.popup__close-button_type_pic');

const errorsEdit = Array.from(formEdit.querySelectorAll('.form__error_type_edit'));
const inputsEdit = Array.from(formEdit.querySelectorAll('.form__input_edit'));
const editPopupSubmitButton = formEdit.querySelector('.form__button');
const errorsAdd = Array.from(formAdd.querySelectorAll('.form__error_type_add'));
const inputsAdd = Array.from(formAdd.querySelectorAll('.form__input_add'));
const addPopupSubmitButton = formAdd.querySelector('.form__button');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyEscHandler);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyEscHandler);
   }

editButton.addEventListener('click', (event) => {
    openPopup(popupEdit);
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;

    errorsEdit.forEach(function (error) {
        error.textContent = '';
    })

    inputsEdit.forEach(function (input) {
        input.classList.remove('form__input_type_error');
    })

    editPopupSubmitButton.removeAttribute('disabled');
    editPopupSubmitButton.classList.remove('form__button_disabled');
    });

popupCloseButtonEdit.addEventListener('click', (event) => {
    closePopup(popupEdit);
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
});

addButton.addEventListener('click', (event) => {
    openPopup(popupAdd);

    errorsAdd.forEach(function (error) {
        error.textContent = '';
    });

    inputsAdd.forEach(function (input) {
        input.classList.remove('form__input_type_error');
    });
    formAdd.reset();

    addPopupSubmitButton.classList.add('form__button_disabled')
    addPopupSubmitButton.setAttribute('disabled', true);
}); 

popupCloseButtonAdd.addEventListener('click', (event) => {
    closePopup(popupAdd);
});

// функция закрытия попапа по нажатиюна esc
function keyEscHandler (event){
    if(event.key === 'Escape'){
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

// функция закрытия попапа нажатием на оверлей
function overlayClickHandler (event){
    if (event.target.classList.contains('popup_opened')){
        closePopup(event.target);
        }
    }

function submitForm(event) {
    event.preventDefault()
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    closePopup(popupEdit);
}
formEdit.addEventListener('submit', submitForm);


// добавление карточек
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const cardsSection = document.querySelector('.cards');
const templateItem = document.querySelector('.template').content; 

initialCards.forEach(addCard); 

function createCard(item) {

  const card = templateItem.querySelector('.card').cloneNode(true);
  const cardImg = card.querySelector('.card__image');
  card.querySelector('.card__title').innerText = item.name;
  cardImg.alt = item.name;
  cardImg.src = item.link;
  const deleteButton = card.querySelector('.card__delete-button');

  deleteButton.addEventListener('click', (event) =>{
    event.target.closest('.card').remove();
  });

  const likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', (event) => {
    likeButton.classList.toggle('card__like-button_active');
  });

  cardImg.addEventListener('click', (event) =>{
    openPopup(popupPic);
    popupImg.src = item.link;
    popupCaption.innerText = item.name;
    popupImg.alt = item.name;
  });
  return card;
}

popupCloseButtonPic.addEventListener('click', (event) =>{
    closePopup(popupPic);
});

function addCard(item) {
  const card = createCard(item);
  cardsSection.prepend(card);
}

function addCardSubmit(event) {
  event.preventDefault();
  const name = inputTitle.value;
  const link = inputLink.value;
  const item = {
    name: name,
    link: link
  };
  addCard(item);
  event.target.reset();
  closePopup(popupAdd);
}
formAdd.addEventListener('submit', addCardSubmit);

popupEdit.addEventListener('click', overlayClickHandler);
popupAdd.addEventListener('click', overlayClickHandler);
popupPic.addEventListener('click', overlayClickHandler);

//анимация попапов
window.addEventListener('load', ()=>{
  document.querySelectorAll('.popup').forEach((popup) => popup.classList.add('popup_transition'))
});
