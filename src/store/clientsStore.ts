import {makeAutoObservable} from "mobx";
import {Client, Pagination} from "../types";
import fetchStore from "./fetchStore";

 class ClientStore {

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

    async fetchClients() {
        const {data: clients, pagination} = await fetchStore.getResource('/api/clients')
        this.setClients(clients)
        this.setPagination(pagination)
    }
}

export default new ClientStore()
