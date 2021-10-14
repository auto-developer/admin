import React, {useContext} from "react";
import {observer} from "mobx-react";
import StoreContext from "../../../../common/context";
import style from './style.module.scss'

function AppHeader() {
    const {mineStore} = useContext(StoreContext)

    return <header className={style.AppHeader}>
        <h1>Home</h1>
        <div>
            <span>{mineStore.nickname}</span>
            <img src={mineStore.avatar} alt={'avatar'}/>
        </div>
    </header>
}

export default observer(AppHeader)
