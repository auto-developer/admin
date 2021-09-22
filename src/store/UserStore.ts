import {makeAutoObservable} from "mobx";

export default class UserStore {

    username = ''

    constructor() {
        makeAutoObservable(this);
    }

    setUsername = (username:string) => {
        this.username = username
    }

    async fetchUser (type:string,token:string) {
        const response = await fetch(`/api/user`, {
            headers: {
                Authorization: `${type} ${token}`
            }
        })
        const user = await response.json()
        this.setUsername(user.username)
        return user
    }

}
