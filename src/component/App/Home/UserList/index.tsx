import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../context";
import {useHistory} from "react-router";
import styles from './style.module.scss'
import {Link} from "react-router-dom";

function UserList() {
    const {usersStore} = useContext(StoreContext)
    const history = useHistory()

    useEffect(() => {
        usersStore.fetchUsers()
            .then(() => {
                console.log('fetch users')
            })
            .catch(e => {
                console.log('exception', e)
                history.push('/login')
            })
    }, [])
    return <section className={styles.users}>
        <table>
            <thead>
            <tr>
                <th>Avatar</th>
                <th>Username</th>
                <th>Nickname</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Detail</th>
            </tr>
            </thead>
            <tbody>
            {usersStore.users.map(user => <tr key={user._id}>
                <td><img src={user.avatar} alt=""/></td>
                <td>{user.username}</td>
                <td>{user.nickname}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td><Link to={`/users/${user.username}`}>Detail</Link></td>
            </tr>)}
            </tbody>
        </table>
    </section>
}

export default observer(UserList)
