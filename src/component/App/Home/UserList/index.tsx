import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../context";
import {useHistory} from "react-router";

function UserList() {
    const {usersStore, tokenStore} = useContext(StoreContext)
    const history = useHistory()

    useEffect(() => {
        usersStore.fetchUsers(tokenStore.tokenType, tokenStore.accessToken)
            .then(() => {
                console.log('fetch users')
            })
            .catch(e => {
                console.log(e)
                history.push('/login')
            })
    }, [])
    return <div>

        <h1>Users</h1>
        {usersStore.users.map(user => <p>
            <span>{user.username}</span>
            <span>{user.nickname}</span>
            <span>{user.mobile}</span>
        </p>)}
    </div>
}

export default observer(UserList)
