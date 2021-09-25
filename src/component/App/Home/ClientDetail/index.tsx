import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../context";
import {useHistory, useParams} from "react-router";
import styles from './styles.module.scss'
import Input from "../../../common/Input";

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

            <label>
                Logo
                <img id="logo" src={clientStore.logo} alt=""/>
            </label>

            <Input label={'Name'} disabled={true} value={clientStore.name} onChange={clientStore.setName}/>
            <Input label={'Description'} disabled={true} value={clientStore.description}
                   onChange={clientStore.setDescription}/>
            <Input label={'Grants'} disabled={true} value={clientStore.grants.toString()}
                   onChange={grants => clientStore.setGrants(grants.split(','))}/>
            <Input label={'Redirect Uris'} disabled={true} value={clientStore.redirectUris.toString()}
                   onChange={uri => clientStore.setRedirectUris(uri.split(','))}/>
        </form>
    </div>
}

export default observer(ClientDetail)
