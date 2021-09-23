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
    return <section>
        <h4>Users</h4>
        <table>
            <thead>
            <tr>
                <th>username</th>
                <th>nickname</th>
                <th>mobile</th>
                <th>email</th>
            </tr>
            </thead>
            <tbody>
            {usersStore.users.map(user => <tr>
                <td>{user.username}</td>
                <td>{user.nickname}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
            </tr>)}
            </tbody>
        </table>
    </section>
}

export default observer(UserList)
