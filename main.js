(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r){var i=r.handleCardLike,a=r.handleDeleteButtonClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._image=e.link,this._likesNumber=e.likes.length,this._selector=n,this._handleCardClick=o,this._handleDeleteButtonClick=a,this._handleCardLike=i}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".card__image");return this._element.querySelector(".card__title").textContent=this._name,e.src=this._image,e.alt=this._name,this._element.querySelector(".card__likes-number").textContent=this._likesNumber,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__delete-button").addEventListener("click",(function(){e._handleDeleteButtonClick(e)})),this._element.querySelector(".card__like-button").addEventListener("click",(function(){e._handleLikeButtonClick()})),this._element.querySelector(".card__image").addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._image})}))}},{key:"_handleLikeButtonClick",value:function(){this._element.querySelector(".card__like-button").classList.toggle("card__like-button_active"),this._handleCardLike(this)}},{key:"activateLikeButton",value:function(){this._element.querySelector(".card__like-button").classList.add("card__like-button_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"removeDeleteButton",value:function(){this._element.querySelector(".card__delete-button").remove()}},{key:"updateCardLikes",value:function(e){this._element.querySelector(".card__likes-number").textContent=e.likes.length}}])&&e(n.prototype,o),t}();const n=t;function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._submitButton=this._form.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),t.classList.add(this._config.errorClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){this._form.checkValidity()?(this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.removeAttribute("disabled")):(this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_setFormListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetForm",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setFormListeners()}}])&&o(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const a=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),u(this,"_handleOverlayClickClose",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",this._handleOverlayClickClose)}}])&&c(t.prototype,n),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=h(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}const v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(o);if(r){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t,n=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._popup=document.querySelector(n),t._form=t._popup.querySelector(".form"),t._inputList=t._form.querySelectorAll(".form__input"),t._handleFormSubmit=o,t._formSubmitButton=t._form.querySelector(".form__button"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;p(_(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){p(_(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._formSubmitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&f(t.prototype,n),a}(s);function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const b=function(){function e(t){var n,o,r=this,i=t.nameSelector,a=t.occupationSelector,c=t.avatarContainerSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){return{name:r._userName.textContent,occupation:r._userOccupation.textContent}},(n="getUserInfo")in this?Object.defineProperty(this,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[n]=o,this._userName=document.querySelector(i),this._userOccupation=document.querySelector(a),this._avatarContainer=document.querySelector(c),this._avatar=this._avatarContainer.querySelector(".profile__avatar"),this._avatarHover=this._avatarContainer.querySelector(".profile__avatar-hover")}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userOccupation.textContent=e.about}},{key:"setNewAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"displayEditAvatarIcon",value:function(){var e=this;this._avatarContainer.addEventListener("mouseover",(function(){e._avatarHover.classList.add("profile__avatar-hover_active")})),this._avatarContainer.addEventListener("mouseout",(function(){e._avatarHover.classList.remove("profile__avatar-hover_active")}))}}])&&m(t.prototype,n),e}();var k=document.querySelector(".popup_type_picture"),g=k.querySelector(".popup__image"),S=k.querySelector(".popup__figcaption"),C=document.querySelector(".profile__edit-button"),w=document.querySelector(".profile__add-button"),L=document.querySelector(".form_type_add"),E=document.querySelector(".form_type_edit"),O=document.querySelector(".form__input_type_name"),j=document.querySelector(".form__input_type_occupation"),P=document.querySelector(".profile__name"),q=document.querySelector(".profile__occupation"),B=document.querySelector(".profile__avatar-hover"),T=document.querySelector(".form_type_avatar"),R=document.querySelector(".profile__avatar");function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=A(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},I.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function U(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}const z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(o);if(r){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(){return x(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e){console.log(e),g.src=e.link,g.alt=e.name,S.textContent=e.name,I(V(a.prototype),"open",this).call(this)}}])&&F(t.prototype,n),a}(s);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=G(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},M.apply(this,arguments)}function G(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=W(e)););return e}function K(e,t){return K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},K(e,t)}function Q(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}const X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(o);if(r){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Q(this,e)});function a(e){var t,n=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._form=t._popup.querySelector(".form"),t._handleFormSubmit=o,t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;M(W(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(),e.close()}))}}])&&J(t.prototype,n),a}(s);function Y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Z=new(function(){function e(t){var n=t.url,o=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=n,this.token=o}var t,n;return t=e,(n=[{key:"getCards",value:function(){return fetch("".concat(this.url,"/cards"),{headers:{authorization:this.token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserData",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:{authorization:this.token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editUserData",value:function(e){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.occupation})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this.url,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при добавлении карточки: ".concat(e.status))}))}},{key:"deleteMyCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e._id),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при удалении карточки: ".concat(e.status))}))}},{key:"putLike",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при добавлении лайка: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при удалении лайка: ".concat(e.status))}))}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при обновлении аватара: ".concat(e.status))}))}}])&&Y(t.prototype,n),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-32",token:"76c1c471-2766-4a3c-9dbb-2acf0a9ae808"});function $(e){var t=new n(e,".template",ae,{handleCardLike:function(){e.likes.some((function(e){return"6bb60632fcf5ef9219847aa4"===e._id}))?Z.deleteLike(e).then((function(n){t.updateCardLikes(n),e=n})).catch((function(e){console.log(e)})):Z.putLike(e).then((function(n){t.updateCardLikes(n),e=n})).catch((function(e){console.log(e)}))},handleDeleteButtonClick:function(){var n=new X({popupSelector:".popup_type_confirm",handleFormSubmit:function(){Z.deleteMyCard(e).then((function(e){console.log(e),t.deleteCard()})).catch((function(e){console.log(e)}))}});n.open(),n.setEventListeners()}}),o=t.generateCard();return"6bb60632fcf5ef9219847aa4"!==e.owner._id&&t.removeDeleteButton(),e.likes.some((function(e){return"6bb60632fcf5ef9219847aa4"===e._id}))&&t.activateLikeButton(),o}Z.getUserData().then((function(e){P.textContent=e.name,q.textContent=e.about,R.src=e.avatar})).catch((function(e){console.log(e)})),Z.getCards().then((function(e){ee.renderItems(e.reverse())})).catch((function(e){console.log(e)}));var ee=new a({renderer:function(e){ee.addItem($(e))}},".cards"),te=new v({popupSelector:".popup_type_add",handleFormSubmit:function(e){te.renderLoading(!0),Z.addNewCard(e).then((function(e){ee.addItem($(e))})).catch((function(e){console.log(e)})).finally((function(){te.renderLoading(!1)}))}});te.setEventListeners(),w.addEventListener("click",(function(){te.open(),se.resetForm()}));var ne=new b({nameSelector:".profile__name",occupationSelector:".profile__occupation",avatarContainerSelector:".profile__avatar-container"});ne.displayEditAvatarIcon();var oe=new v({popupSelector:".popup_type_edit",handleFormSubmit:function(e){oe.renderLoading(!0),Z.editUserData(e).then((function(e){ne.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){oe.renderLoading(!1)}))}});oe.setEventListeners(),C.addEventListener("click",(function(){O.value=ne.getUserInfo().name,j.value=ne.getUserInfo().occupation,ue.resetForm(),oe.open()}));var re=new v({popupSelector:".popup_type_avatar",handleFormSubmit:function(e){re.renderLoading(!0),Z.editUserAvatar(e).then((function(e){ne.setNewAvatar(e)})).catch((function(e){console.log(e)})).finally((function(){re.renderLoading(!1)}))}});re.setEventListeners(),B.addEventListener("click",(function(){le.resetForm(),re.open()}));var ie=new z(".popup_type_picture");function ae(e){console.log(e),ie.open(e)}ie.setEventListeners();var ce={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible"},ue=new r(ce,E);ue.enableValidation();var se=new r(ce,L);se.enableValidation();var le=new r(ce,T);le.enableValidation()})();