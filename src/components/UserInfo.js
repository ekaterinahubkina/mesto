class UserInfo {
    constructor({ nameSelector, occupationSelector, avatarContainerSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userOccupation = document.querySelector(occupationSelector);
        this._avatarContainer = document.querySelector(avatarContainerSelector);
        this._avatar = this._avatarContainer.querySelector('.profile__avatar');
        this._avatarHover = this._avatarContainer.querySelector('.profile__avatar-hover');
    }

    getUserInfo = () => {
        return {
            name: this._userName.textContent,
            occupation: this._userOccupation.textContent
        }
    }

    setUserInfo(data) {
        if (data.name) {
            this._userName.textContent = data.name;
        }
        if (data.about) {
            this._userOccupation.textContent = data.about;
        }
    }
    getUserId(data) {
        return {
            userId: data._id
        }
    }


    setNewAvatar(data) {
        if (data.avatar) {
            this._avatar.src = data.avatar;
        }
    }

    displayEditAvatarIcon() {

        this._avatarContainer.addEventListener('mouseover', () => {
            this._avatarHover.classList.add('profile__avatar-hover_active');
        })
        this._avatarContainer.addEventListener('mouseout', () => {
            this._avatarHover.classList.remove('profile__avatar-hover_active');
        })
    }
}
export default UserInfo;