import React, {useContext, useEffect} from "react";
import StoreContext from "../../../context";
import {useHistory} from "react-router";

function AuthCallBack() {
    const {mineStore} = useContext(StoreContext)
    const history = useHistory()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const code = params.get('code')
        mineStore.fetchMine(code)
            .then(user => {
                console.log(user)
                return history.replace(`/${mineStore.username}`)
            })
            .catch(e => {
                history.replace('/login')
            })
    }, [])

    return <div>
        <h1>登录中</h1>
        <h1>Loading...</h1>
    </div>
}

export default AuthCallBack
