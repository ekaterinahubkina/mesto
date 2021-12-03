class UserInfo {
    constructor({ nameSelector, occupationSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userOccupation = document.querySelector(occupationSelector);
    }

    getUserInfo = () => {
        this._userInfo = {};
        this._userInfo.name = this._userName.textContent;
        this._userInfo.occupation = this._userOccupation.textContent;

        return this._userInfo;

    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userOccupation.textContent = data.occupation;
    }

}

export default UserInfo;