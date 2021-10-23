import {makeAutoObservable} from "mobx";
import fetchStore from "./fetchStore";
import {Client} from "../types";

class ClientStore {

    id: string = '';
    logo: string = '';
    description: string = '';
    name: string = '';
    grants: string[] = [];
    redirectUris: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setId = (id: string) => {
        this.id = id
    }

    setLogo = (logo: string) => {
        this.logo = logo
    }

    setDescription = (description: string) => {
        this.description = description
    }

    setName = (name: string) => {
        this.name = name
    }

    setGrants = (grants: string[]) => {
        this.grants = grants
    }

    setRedirectUris = (redirectUris: string[]) => {
        this.redirectUris = redirectUris
    }

    async fetchClient(clientId: string) {
        const client: Client = await fetchStore.getResource(`/admin/clients/${clientId}`)
        this.setId(client._id)
        this.setDescription(client.description)
        this.setGrants(client.grants)
        this.setRedirectUris(client.redirectUris)
        this.setName(client.name)
        this.setLogo(client.logo)
    }
}

export default new ClientStore()
