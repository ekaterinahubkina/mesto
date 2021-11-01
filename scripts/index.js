const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupCloseButtonEdit = document.querySelector('.popup__close-button_type_edit');
const popupCloseButtonAdd = document.querySelector('.popup__close-button_type_add');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button'); 


const formAdd = document.querySelector('.form_type_add');
const inputTitle = document.querySelector('.form__input_type_title');
const inputLink = document.querySelector('.form__input_type_link');

const form = document.querySelector('.form');
const profileName = document.querySelector('.profile__name');
const inputName = document.querySelector('.form__input_type_name');
const profileOccupation = document.querySelector('.profile__occupation');
const inputOccupation = document.querySelector('.form__input_type_occupation');




function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    const errors = Array.from(document.querySelectorAll('.form__error'));
    errors.forEach(function (error){
        error.textContent = '';
    })
    const inputs = Array.from(document.querySelectorAll('.form__input'));
    inputs.forEach(function (input){
        input.classList.remove('form__input_type_error');
    })
}

editButton.addEventListener('click', (event) => {
    openPopup(popupEdit);
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
    const editPopupSubmitButton = form.querySelector('.form__button');
    editPopupSubmitButton.removeAttribute('disabled');
    editPopupSubmitButton.classList.remove('form__button_disabled');
    document.addEventListener('keydown', keyEscHandler);
    document.addEventListener('click', overlayClickHandler);
});
popupCloseButtonEdit.addEventListener('click', (event) => {
    closePopup(popupEdit);
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
    document.removeEventListener('keydown', keyEscHandler);
    document.removeEventListener('click', overlayClickHandler);
});

addButton.addEventListener('click', (event) => {
    openPopup(popupAdd);
    const addPopupSubmitButton = formAdd.querySelector('.form__button');
    addPopupSubmitButton.classList.add('form__button_disabled')
    addPopupSubmitButton.setAttribute('disabled', true);
    document.addEventListener('keydown', keyEscHandler);
    document.addEventListener('click', overlayClickHandler);
}); 

popupCloseButtonAdd.addEventListener('click', (event) => {
    closePopup(popupAdd);
    document.removeEventListener('keydown', keyEscHandler);
    document.removeEventListener('click', overlayClickHandler);
    formAdd.reset();
});

// функция закрытия попапа по нажатиюна esc
function keyEscHandler (event){
    if(event.key === 'Escape'){
        const popups = Array.from(document.querySelectorAll('.popup'));
        popups.forEach(function (popup){
            closePopup(popup);
            formAdd.reset();
        });
    }
}

// функция закрытия попапа нажатием на оверлей
function overlayClickHandler (event){
    if (event.target.classList.contains('popup')){
        const popups = Array.from(document.querySelectorAll('.popup'));
        popups.forEach(function (popup){
            closePopup(popup);
            formAdd.reset();
        });
    }
}

function submitForm(event) {
    event.preventDefault()
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    closePopup(popupEdit);
}
form.addEventListener('submit', submitForm);


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
  card.querySelector('.card__title').innerText = item.name;
  card.querySelector('.card__image').alt = item.name;
  card.querySelector('.card__image').src = item.link;
  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', (event) =>{
    event.target.closest('.card').remove();
  });
  const likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', (event) => {
    likeButton.classList.toggle('card__like-button_active');
  });
  const popupPic = document.querySelector('.popup_type_picture');
  const cardImg = card.querySelector('.card__image');
  const popupImg = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__figcaption');
  const popupCloseButtonPic = document.querySelector('.popup__close-button_type_pic');
  cardImg.addEventListener('click', (event) =>{
    openPopup(popupPic);
    popupImg.src = item.link;
    popupCaption.innerText = item.name;
    popupImg.alt = item.name;
    document.addEventListener('keydown', keyEscHandler);
    document.addEventListener('click', overlayClickHandler);
  });
  popupCloseButtonPic.addEventListener('click', (event) =>{
    closePopup(popupPic);
    document.removeEventListener('keydown', keyEscHandler);
    document.removeEventListener('click', overlayClickHandler);
  });
  return card;
}

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

//анимация попапов
window.addEventListener('load', ()=>{
  document.querySelectorAll('.popup').forEach((popup) => popup.classList.add('popup_transition'))
});
