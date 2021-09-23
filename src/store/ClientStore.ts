import {makeAutoObservable} from "mobx";
import {Pagination} from "./UsersStore";

export type Client = {
    clientId: string;
    logo: string;
    description: string;
    name: string;
    grants: string[];
    redirectUris: string[];
}

export default class ClientStore {

    clients: Client[] = []
    pagination = {
        total: 0
    }

    constructor() {
        makeAutoObservable(this);
    }

    setClients(clients: Client[]) {
        this.clients = clients
    }
    setPagination(pagination: Pagination) {
        this.pagination = pagination
    }

    async fetchClients(type: string, token: string) {
        const response = await fetch('/api/clients', {
            headers: {
                Authorization: `${type} ${token}`
            }
        })
        const {data: clients, pagination} = await response.json()
        this.setClients(clients)
        this.setPagination(pagination)
    }
}
