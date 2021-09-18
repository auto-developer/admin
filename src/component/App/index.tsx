import React, {useContext, useEffect} from 'react'
import {Route, Switch} from "react-router";
import Home from "./Home";
import StoreContext from "../../context";

function App() {
    const {tokenStore} = useContext(StoreContext)

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const code = params.get('code')
        console.log(code);
        if (code) {
            tokenStore.postToken(code)
                .then(() => {
                    console.log('fetch token')
                })
        }
    }, [])
    return <Switch>
        <Route path={'/'} strict={true} exact={true}><Home/></Route>
    </Switch>
}

export default App
