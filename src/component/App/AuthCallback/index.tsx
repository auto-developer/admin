import React, {useContext, useEffect} from "react";
import StoreContext from "../../../common/context";
import {useHistory} from "react-router";
import fetchStore from "../../../store/fetchStore";

function AuthCallBack() {
    const {mineStore} = useContext(StoreContext)
    const history = useHistory()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const code = params.get('code')
        fetchStore.postToken(code)
            .then(() => {
                return mineStore.fetchMine()
            })
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
