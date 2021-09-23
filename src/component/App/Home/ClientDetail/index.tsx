import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../context";
import {useHistory, useParams} from "react-router";
import styles from './styles.module.scss'

function ClientDetail() {
    const {clientStore, tokenStore} = useContext(StoreContext)
    const history = useHistory()
    const {clientId} = useParams<{ clientId: string }>();

    useEffect(() => {
        clientStore.fetchClient(tokenStore.tokenType, tokenStore.accessToken, clientId)
            .then(() => {
                console.log('fetch users')
            })
            .catch(e => {
                console.log(e)
                history.push('/login')
            })
    }, [])
    return <div className={styles.clients}>
        <h1>Client Detail</h1>

        <img src={clientStore.logo} alt=""/>
        <p>{clientStore.name}</p>
        <p>{clientStore.description}</p>
    </div>
}

export default observer(ClientDetail)
