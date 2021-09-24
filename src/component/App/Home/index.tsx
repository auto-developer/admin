import React, {useContext, useEffect} from 'react'
import {Route, Switch, useHistory} from "react-router-dom";
import UserList from "./UserList";
import Dashboard from "./Dashboard";
import StoreContext from "../../../context";
import ClientList from "./ClientList";
import styles from './styles.module.scss'
import ClientDetail from "./ClientDetail";
import NavMenu from "./NavMenu";
import UserAdd from "./UserAdd";
import UserDetail from "./UserDetail";

function Home() {
    const {mineStore} = useContext(StoreContext)
    const history = useHistory()
    useEffect(() => {
        mineStore.fetchMine()
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

export default Home
