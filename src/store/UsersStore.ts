import {makeAutoObservable} from "mobx";

export type User = {
    _id:string;
    username: string;
    nickname: string;
    mobile: string;
    email: string;
}

export type Pagination = {
    total: number;
}

export default class UserStore {

    users: User[] = []
    pagination = {
        total: 0
    }

    constructor() {
        makeAutoObservable(this);
    }

    setUsers(users: User[]) {
        this.users = users
    }

    setPagination(pagination: Pagination) {
        this.pagination = pagination
    }

    async fetchUsers(type: string, token: string) {
        const response = await fetch('/api/users', {
            headers: {
                Authorization: `${type} ${token}`
            }
        })
        if (!response.ok) throw await response.json()
        const {data: users, pagination} = await response.json()
        this.setUsers(users)
        this.setPagination(pagination)
    }
}
