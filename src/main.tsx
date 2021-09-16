import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom";
import './style.css'
import 'normalize.css'
import App from './component/App'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
