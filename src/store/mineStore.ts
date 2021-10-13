import {makeAutoObservable} from "mobx";
import fetchStore from './fetchStore'

class MineStore {

    username: string = ''
    nickname: string = ''
    avatar: string = ''

    constructor() {
        makeAutoObservable(this);
    }

    private setUsername = (username: string) => {
        this.username = username
    }
    private setNickname = (nickname: string) => {
        this.nickname = nickname
    }
    private setAvatar = (avatar: string) => {
        this.avatar = avatar
    }

    async fetchMine() {
        const user = await fetchStore.getResource('/api/mine')
        console.log('user')
        console.log(user.nickname)
        this.setUsername(user.username)
        this.setNickname(user.nickname)
        this.setAvatar(user.avatar)
        return user
    }

}

export default new MineStore()
