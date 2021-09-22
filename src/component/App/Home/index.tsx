import React, {useContext, useEffect} from 'react'
import {Link, Route, Switch, useHistory} from "react-router-dom";
import UserList from "./UserList";
import Dashboard from "./Dashboard";
import StoreContext from "../../../context";

function Home() {
    const {tokenStore, userStore} = useContext(StoreContext)
    const history = useHistory()
    useEffect(() => {
        if(!userStore.username) {
            history.push('/login')
        }
    })

    return <div>
        <header>
            <h1>Home</h1>
        </header>
        <aside>
            <nav>
                <ul>
                    <li><Link to={'/'}>Dashboard</Link></li>
                    <li><Link to={'/users'}>User List</Link></li>
                </ul>
            </nav>
        </aside>
        <main>
            <Switch>
                <Route path={'/'} strict={true} exact={true}><Dashboard/></Route>
                <Route path={'/users'}><UserList/></Route>
            </Switch>
        </main>

    </div>
}

export default Home
