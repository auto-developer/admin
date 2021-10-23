import {makeAutoObservable} from "mobx";
import fetchStore from "./fetchStore";
import {Pagination, User} from "../types";

class UsersStore {

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

    async fetchUsers() {
        const {data: users, pagination} = await fetchStore.getResource('/admin/users')
        this.setUsers(users)
        this.setPagination(pagination)
        return users
    }
}

export default new UsersStore()
