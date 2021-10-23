import React, {useContext} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../common/context";
import style from './style.module.scss'
import {useHistory} from "react-router";

function AppHeader() {
    const {mineStore, fetchStore} = useContext(StoreContext)
    const history = useHistory()

    const logout = () => {
        fetchStore.clearToken()
        history.replace('/login')
    }
    return <header className={style.AppHeader}>
        <h1>Home</h1>
        <div onClick={logout}>
            <span>{mineStore.nickname}</span>
            <img src={mineStore.avatar} alt={'avatar'}/>
        </div>
    </header>
}

export default observer(AppHeader)
