import React, {useContext, useEffect} from 'react'
import {CLIENT_ID, OAUTH_SERVER, REDIRECT_URI} from "../../../common/config";
import {observer} from "mobx-react";
import StoreContext from "../../../context";

function Dashboard() {
    const {userStore, tokenStore} = useContext(StoreContext)

    useEffect(() => {
        userStore.fetchUsers(tokenStore.tokenType, tokenStore.accessToken)
            .then(() => {
                console.log('fetch users')
            })
    }, [])

    const oauthUri = `${OAUTH_SERVER}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=username&state=xyz`
    const registerUri = `${OAUTH_SERVER}/sign-up`
    return <div>
        <h1>Home</h1>
        <ul>
            <li><a href={oauthUri}>sign in</a></li>
            <li><a href={registerUri}>sign up</a></li>
        </ul>

        {userStore.users.map(user => <p>
            <span>{user.username}</span>
            <span>{user.nickname}</span>
            <span>{user.mobile}</span>
        </p>)}
    </div>
}

export default observer(Dashboard)
