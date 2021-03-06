import React from 'react'
import {CLIENT_ID, OAUTH_SERVER, REDIRECT_URI, SCOPE} from "../../../common/config";

function Login() {

    const oauthUri = `${OAUTH_SERVER}/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&state=xyz`
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
