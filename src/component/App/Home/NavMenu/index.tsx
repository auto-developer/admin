import {NavLink} from "react-router-dom";
import React from "react";
import styles from "./styles.module.scss"

function NavMenu() {

    return <nav className={styles.nav}>
        <ul>
            <li><NavLink to={`/`} strict={true} exact={true} activeClassName={styles.active}>Dashboard</NavLink></li>
            <li><NavLink to={`/users`} activeClassName={styles.active}>User List</NavLink></li>
            <li><NavLink to={`/clients`} activeClassName={styles.active}>Client List</NavLink></li>
        </ul>
    </nav>
}

export default NavMenu
