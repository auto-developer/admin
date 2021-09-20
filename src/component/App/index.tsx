import React from 'react'
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Auth from "./Auth";

function App() {

    return <Router>
        <Switch>
            <Route path={'/auth'} strict={true} exact={true}><Auth/></Route>
            <Route path={'/login'} strict={true} exact={true}><Login/></Route>
            <Route><Home/></Route>
        </Switch>
    </Router>
}

export default App
