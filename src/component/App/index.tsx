import React from 'react'
import {Route, Switch} from "react-router";
import Home from "./Home";

function App() {

    return <Switch>
        <Route path={'/'} strict={true} exact={true}><Home/></Route>
    </Switch>
}

export default App
