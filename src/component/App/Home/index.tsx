import React from 'react'
import {Link} from "react-router-dom";

function Dashboard() {
    return <div>
        <h1>Home</h1>
        <ul>
            <li><Link to="/sign-in">sign in</Link></li>
            <li><Link to="/sign-up">sign up</Link></li>
        </ul>

    </div>
}

export default Dashboard
