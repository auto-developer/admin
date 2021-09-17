import React from 'react'

function Dashboard() {
    const {
        VITE_CLIENT_ID,
        VITE_OAUTH_SERVER,
        VITE_REDIRECT_URI
    } = import.meta.env

    const oauthUri = `${VITE_OAUTH_SERVER}/authorize?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}&response_type=code&scope=username&state=xyz`
    const registerUri = `${VITE_OAUTH_SERVER}/sign-up`
    return <div>
        <h1>Home</h1>
        <ul>
            <li><a href={oauthUri}>sign in</a></li>
            <li><a href={registerUri}>sign up</a></li>
        </ul>

    </div>
}

export default Dashboard
