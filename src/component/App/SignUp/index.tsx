import React, {useContext, useState} from 'react'
import StoreContext from "../../../context";

function SignUp() {
    const {userStore} = useContext(StoreContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleRegister = async () => {
        await userStore.postUser({
            username, password
        })
    }

    return <div>
        sign-up

        <form>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleRegister}>注册</button>
        </form>
    </div>
}

export default SignUp
