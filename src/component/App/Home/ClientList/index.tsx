import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../context";

function ClientList() {
    const {clientStore, tokenStore} = useContext(StoreContext)

    useEffect(() => {
        clientStore.fetchClients(tokenStore.tokenType, tokenStore.accessToken)
            .then(() => {
                console.log('fetch users')
            })
    }, [])
    return <div>

        <h1>Clients</h1>
        <table>
            <thead>
            <tr>
                <th>Logo</th>
                <th>Client Id</th>
                <th>Client name</th>
            </tr>
            </thead>
            <tbody>
            {clientStore.clients.map(client => <tr>
                <td><img src={client.logo} alt={client.logo} /></td>
                <td>{client.name}</td>
                <td>{client.description}</td>
            </tr>)}
            </tbody>
        </table>
    </div>
}

export default observer(ClientList)
