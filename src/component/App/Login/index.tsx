import React from 'react'
import {CLIENT_ID, OAUTH_SERVER, REDIRECT_URI} from "../../../config";

function Login() {

    const oauthUri = `${OAUTH_SERVER}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=username&state=xyz`
    const registerUri = `${OAUTH_SERVER}/sign-up`
    return <div>
        <h1>Login</h1>
        <ul>
            <li><a href={oauthUri}>sign in</a></li>
            <li><a href={registerUri}>sign up</a></li>
        </ul>
    </div>
}

export default Login
