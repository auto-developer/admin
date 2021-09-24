import {makeAutoObservable} from "mobx";
import fetchStore from './fetchStore'

class UserStore {

    username = ''

    constructor() {
        makeAutoObservable(this);
    }

    setUsername = (username: string) => {
        this.username = username
    }

    async fetchUser (type:string,token:string) {
        const user = await fetchStore.getResource('/api/user')
        this.setUsername(user.username)
        return user
    }

}

export default new UserStore()
