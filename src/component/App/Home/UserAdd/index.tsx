import React, {FormEvent, useContext, useEffect} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../context";
import styles from './style.module.scss'
import Input from "../../../common/Input";
import Radio from "../../../common/Radio";
import {Gender, RegisterSource} from "../../../../types";
import Button from "../../../common/Button";
import Select from "../../../common/Select";

function UserAdd() {
    const {userStore} = useContext(StoreContext)
    useEffect(() => {
        userStore.reset()
    }, [])

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        userStore.postUser()
            .then(user => {
                console.log('add user', user);
            });
    }

    return <div className={styles.userAdd}>
        <h2>User Add</h2>
        <form action="" onSubmit={handleSubmit}>
            <label>Logo
                <img id="logo" src={userStore.avatar} alt=""/>
            </label>
            <Input label={'Name'} value={userStore.username} onChange={userStore.setUsername}/>
            <Input label={'Email'} value={userStore.email} onChange={userStore.setEmail}/>
            <Input label={'Mobile'} value={userStore.mobile} onChange={userStore.setMobile}/>
            <Radio label={'Gender'} options={Object.keys(Gender)} value={userStore.gender}
                   onChange={userStore.setGender}/>
            <Select label={'Register Source'}
                    options={Object.keys(RegisterSource)}
                    value={userStore.registerSource}
                    onChange={userStore.setRegisterSource}/>
            <Button label={'submit'}/>
        </form>

    </div>
}

export default observer(UserAdd)
