import React, {useContext, useEffect} from "react";
import StoreContext from "../../../context";
import {useHistory} from "react-router";

function AuthCallBack() {
    const {tokenStore, userStore} = useContext(StoreContext)
    const history = useHistory()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const code = params.get('code')
        if (!code) {
            return history.replace('/login')
        }
        tokenStore.postToken(code)
            .then((token) => {
                return userStore.fetchUser(tokenStore.tokenType, token.access_token)
            })
            .then(user => {
                console.log(user)
                return history.replace(`/${userStore.username}`)
            })
    }, [])

    return <div>
        <h1>登录中</h1>
        <h1>Loading...</h1>
    </div>
}

export default AuthCallBack
