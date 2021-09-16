import React from 'react'

function SignIn() {
    const oauth_uri = ''
    return <div>
        sign-in
        {JSON.stringify(import.meta.env)}
        <form action={"/session"} method="POST">
            <input type="text" name="username"/>
            <input type="text" name="password"/>
            <input type="submit"/>
        </form>

        <a href={oauth_uri}>Login</a>
    </div>
}

export default SignIn
