import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../context";
import {useHistory, useParams} from "react-router";
import styles from './styles.module.scss'

function ClientDetail() {
    const {clientStore} = useContext(StoreContext)
    const history = useHistory()
    const {clientId} = useParams<{ clientId: string }>();

    useEffect(() => {
        clientStore.fetchClient(clientId)
            .then(() => {
                console.log('fetch users')
            })
            .catch(e => {
                console.log(e)
                history.push('/login')
            })
    }, [])
    return <div className={styles.client}>
        <h2>Client Detail</h2>
        <form action="">

            <label htmlFor="logo">Logo</label>
            <img id="logo" src={clientStore.logo} alt=""/>

            <label htmlFor="name">Name</label>
            <input id="name" disabled={true} value={clientStore.name}/>


            <label htmlFor="description">description</label>
            <input id="description" disabled={true} value={clientStore.description}/>


            <label htmlFor="grants">Grants</label>
            <input id="grants" disabled={true} value={clientStore.grants}/>

            <label htmlFor="redirectUris">Redirect Uris</label>
            <input id="redirectUris" disabled={true} value={clientStore.redirectUris}/>

        </form>
    </div>
}

export default observer(ClientDetail)
