import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../context";
import {useHistory, useParams} from "react-router";
import styles from './style.module.scss'
import Input from "../../../common/Input";
import Radio from "../../../common/Radio";
import {Gender} from "../../../../types";

function UserDetail() {
    const {userStore} = useContext(StoreContext)
    const history = useHistory()
    const {username} = useParams<{ username: string }>();

    useEffect(() => {
        userStore.fetchUser(username)
            .then(() => {
                console.log('fetch user')
            })
            .catch(e => {
                console.log(e)
                history.push('/login')
            })
    }, [])
    return <div className={styles.userAdd}>
        <h2>User Detail</h2>
        <form action="">

            <label>Logo
                <img id="logo" src={userStore.avatar} alt=""/>
            </label>

            <Input label={'Name'} disabled={true} value={userStore.username}/>
            <Input label={'Email'} disabled={true} value={userStore.email}/>
            <Input label={'Mobile'} disabled={true} value={userStore.mobile}/>
            <Radio label={'Gender'} options={Object.keys(Gender)} value={userStore.gender}
                   onChange={userStore.setGender}/>

        </form>

    </div>
}

export default observer(UserDetail)
