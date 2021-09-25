import React, {useContext} from 'react'
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AuthCallBack from "./AuthCallback";
import StoreContext from "../../context";
import {observer} from "mobx-react";
import Loading from "../common/Loading";

function App() {
    const {fetchStore} = useContext(StoreContext)

    return <Router>
        <Switch>
            <Route path={'/callback'} strict={true} exact={true}><AuthCallBack/></Route>
            <Route path={'/login'} strict={true} exact={true}><Login/></Route>
            <Route><Home/></Route>
        </Switch>
        <Loading show={fetchStore.fetching}/>
    </Router>
}

export default observer(App)
