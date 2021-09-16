import React, {useContext, useState} from 'react'
import StoreContext from "../../../context";

function SignUp() {
    const {userStore} = useContext(StoreContext)
    const [username, setUsername] = useState('lossa')
    const [password, setPassword] = useState('qqqqqq')
    const [email, setEmail] = useState('lossa@gmail.com')
    const [mobile, setMobile] = useState('15566968763')
    const handleRegister = async () => {
        await userStore.postUser({
            username, password, mobile, email
        })

        return false
    }

    return <div>
        sign-up

        <form>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            <button onClick={handleRegister}>注册</button>
        </form>
    </div>
}

export default SignUp
