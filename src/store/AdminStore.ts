import {makeAutoObservable} from "mobx";

export default class AdminStore {

    username = ''

    constructor() {
        makeAutoObservable(this);
    }

    setUsername = (username:string) => {
        this.username = username
    }



}
