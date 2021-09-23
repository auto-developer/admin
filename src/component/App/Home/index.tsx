import React, {useContext, useEffect} from 'react'
import {NavLink, Redirect, Route, Switch, useHistory} from "react-router-dom";
import UserList from "./UserList";
import Dashboard from "./Dashboard";
import StoreContext from "../../../context";
import ClientList from "./ClientList";
import styles from './styles.module.scss'
import ClientDetail from "./ClientDetail";
import NavMenu from "./NavMenu";

function Home() {
    const {tokenStore, userStore} = useContext(StoreContext)
    const history = useHistory()
    useEffect(() => {
        userStore.fetchUser(tokenStore.tokenType, tokenStore.accessToken)
            .catch(e => {
                history.push('/login')
            })
    })

    return <div className={styles.home}>
        <header>
            <h1>Home</h1>
        </header>
        <section>
            <aside><NavMenu/></aside>
            <main>
                <Switch>
                    <Route path={'/'} strict={true} exact={true}><Dashboard/></Route>
                    <Route path={'/users'}><UserList/></Route>
                    <Route path={'/clients'} strict={true} exact={true}><ClientList/></Route>
                    <Route path={'/clients/:clientId'}><ClientDetail/></Route>
                </Switch>
            </main>
        </section>
    </div>
}

export default Home
