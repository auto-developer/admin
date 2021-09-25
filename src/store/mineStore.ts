import {makeAutoObservable} from "mobx";
import fetchStore from './fetchStore'

class MineStore {

    username = ''

    constructor() {
        makeAutoObservable(this);
    }

    setUsername = (username: string) => {
        this.username = username
    }

    async fetchMine() {
        const user = await fetchStore.getResource('/api/mine')
        this.setUsername(user.username)
        return user
    }

}

export default new MineStore()
