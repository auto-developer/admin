import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../context";
import {useHistory} from "react-router";
import styles from './styles.module.scss'
import {Link} from "react-router-dom";

function ClientList() {
    const {clientsStore, tokenStore} = useContext(StoreContext)
    const history = useHistory()

    useEffect(() => {
        clientsStore.fetchClients(tokenStore.tokenType, tokenStore.accessToken)
            .then(() => {
                console.log('fetch users')
            })
            .catch(e => {
                console.log(e)
                history.push('/login')
            })
    }, [])
    return <div className={styles.clients}>

        <h1>Clients</h1>
        <table>
            <thead>
            <tr>
                <th>Logo</th>
                <th>Client Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Detail</th>
            </tr>
            </thead>
            <tbody>
            {clientsStore.clients.map(client => <tr key={client._id}>
                <td><img src={client.logo} alt={client.logo} /></td>
                <td>{client._id}</td>
                <td>{client.name}</td>
                <td>{client.description}</td>
                <td><Link to={`/clients/${client._id}`}>Detail</Link></td>
            </tr>)}
            </tbody>
        </table>
    </div>
}

export default observer(ClientList)
