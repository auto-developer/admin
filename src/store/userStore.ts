import {makeAutoObservable} from "mobx";
import fetchStore from './fetchStore'
import {Gender, RegisterSource, User} from "../types";

class UserStore implements Omit<User, '_id'> {

    _id: string = '';
    email: string = '';
    mobile: string = '';
    nickname: string = '';
    username = '';
    avatar = '';
    gender = Gender.male;
    registerSource: RegisterSource = RegisterSource.username;

    constructor() {
        makeAutoObservable(this);
    }

    setUsername = (username: string) => {
        this.username = username
    }
    setAvatar = (avatar: string) => {
        this.avatar = avatar
    }
    setNickname = (nickname: string) => {
        this.nickname = nickname
    }
    setMobile = (mobile: string) => {
        this.mobile = mobile
    }
    setEmail = (email: string) => {
        this.email = email
    }
    setGender = (gender: Gender) => {
        this.gender = gender
    }
    setRegisterSource = (registerSource: RegisterSource) => {
        this.registerSource = registerSource
    }

    reset = () => {
        this.username = ''
        this.avatar = ''
        this.email = ''
        this.nickname = ''
        this.mobile = ''
    }

    async fetchUser(userId: string) {
        const user = await fetchStore.getResource(`/api/users/${userId}`)
        this.setUsername(user.username)
        this.setNickname(user.nickname)
        this.setAvatar(user.avatar)
        this.setGender(user.gender)
        this.setEmail(user.email)
        this.setMobile(user.mobile)
        return user
    }

    async postUser() {
        const params = {
            email: this.email,
            mobile: this.mobile,
            avatar: this.avatar,
            gender: this.gender,
            username: this.username,
            nickname: this.nickname,
            registerSource: this.registerSource,
        }
        const user = await fetchStore.postResource('/api/users', params)
        return user
    }
}

export default new UserStore()
