/**
 *       code -> toke  -> info
 * AUTH   NO      NO      NO
 * CODE   YES     NO      NO
 * TOKEN  NO      YES     NO
 * INFO   NO      NO      YES
 * @constructor lossa
 */
import React, {useContext, useEffect} from "react";
import StoreContext from "../../../context";

enum AuthState {
    'AUTH', 'CODE', 'TOKEN', 'INFO'
}


function Auth() {
    const {tokenStore, adminStore} = useContext(StoreContext)

    useEffect(() => {
        if(adminStore.username) {

        }
        const params = new URLSearchParams(location.search)
        const code = params.get('code')
        console.log('code:', code);
        if (code) {
            tokenStore.postToken(code)
                .then(() => {
                    console.log('fetch token')
                })
        }
    }, [])

    return <div>
        <h1>登录中</h1>
        <h1>Loading...</h1>
    </div>
}

export default Auth
