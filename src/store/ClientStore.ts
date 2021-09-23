import {makeAutoObservable} from "mobx";
import {Client} from "./ClientsStore";


export default class ClientStore {

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

    async fetchClient(type: string, token: string, clientId: string) {
        const response = await fetch(`/api/clients/${clientId}`, {
            headers: {
                Authorization: `${type} ${token}`
            }
        })
        const client: Client = await response.json()
        this.setId(client._id)
        this.setDescription(client.description)
        this.setGrants(client.grants)
        this.setRedirectUris(client.redirectUris)
        this.setName(client.name)
        this.setLogo(client.logo)
    }
}
