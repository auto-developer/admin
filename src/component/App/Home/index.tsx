import React, {useContext, useEffect} from 'react'
import {Route, Switch, useHistory} from "react-router-dom";
import UserList from "./UserList";
import Dashboard from "./Dashboard";
import StoreContext from "../../../common/context";
import ClientList from "./ClientList";
import styles from './styles.module.scss'
import ClientDetail from "./ClientDetail";
import NavMenu from "./NavMenu";
import UserAdd from "./UserAdd";
import UserDetail from "./UserDetail";
import {observer} from "mobx-react";
import AppHeader from "./AppHeader";

function Home() {
    const {mineStore} = useContext(StoreContext)
    const history = useHistory()
    useEffect(() => {
        if (!mineStore.username) {
            mineStore.fetchMine()
                .then((user) => {
                    console.log(user)
                })
                .catch(() => {
                    history.push('/login')
                })
        }
    }, [])

    return <div className={styles.home}>
        <AppHeader/>
        <section>
            <aside><NavMenu/></aside>
            <main>
                <Switch>
                    <Route path={'/'} strict={true} exact={true}><Dashboard/></Route>
                    <Route path={'/users'} strict={true} exact={true}><UserList/></Route>
                    <Route path={'/users/add'} strict={true} exact={true}><UserAdd/></Route>
                    <Route path={'/users/:username'} strict={true} exact={true}><UserDetail/></Route>
                    <Route path={'/clients'} strict={true} exact={true}><ClientList/></Route>
                    <Route path={'/clients/:clientId'}><ClientDetail/></Route>
                </Switch>
            </main>
        </section>
    </div>
}

export default observer(Home)
