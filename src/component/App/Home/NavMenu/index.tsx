import {NavLink} from "react-router-dom";
import React from "react";
import styles from "./styles.module.scss"

function NavMenu() {

    return <nav className={styles.nav}>
        <ul>
            <li><NavLink to={`/`}>Dashboard</NavLink></li>
            <li><NavLink to={`/users`}>User List</NavLink></li>
            <li><NavLink to={`/clients`}>Client List</NavLink></li>
        </ul>
    </nav>
}

export default NavMenu
