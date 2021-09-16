import React from 'react'
import {Route, Switch} from "react-router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";

function App() {

    return <Switch>
        <Route path={'/'} strict={true} exact={true}><Home/></Route>
        <Route path={'/sign-in'}><SignIn/></Route>
        <Route path={'/sign-up'}><SignUp/></Route>
    </Switch>
}

export default App
