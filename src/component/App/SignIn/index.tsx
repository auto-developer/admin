import React from 'react'

function SignIn() {
    const {VITE_CLIENT_ID, VITE_OAUTH_SERVER, VITE_REDIRECT_URI} = import.meta.env
    const oauth_uri = `${VITE_OAUTH_SERVER}/authorize?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}`

    return <div>
        sign-in
        <form action={"/session"} method="POST">
            <input type="text" name="username"/>
            <input type="text" name="password"/>
            <input type="submit"/>
        </form>

        <a href={oauth_uri}>Login</a>
    </div>
}

export default SignIn
