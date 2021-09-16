import {makeAutoObservable} from "mobx";

export type UserFormType = {
    username: string;
    password: string;
    email: string;
    mobile: string;
}

export default class UserStore {

    constructor() {
        makeAutoObservable(this);
    }

    async postUser(userForm: UserFormType): Promise<void> {
        const param = new URLSearchParams(userForm)
        param.append('registerSource', 'username')
        const res = await fetch('/api/users', {
            method: 'POST',
            body: param
        })
        const result = await res.json()
        console.log(result)

    }

}
