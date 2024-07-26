import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'
import UserContaxt from './Login Logout/UserContaxt.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContaxt>
     <App/>
    </UserContaxt>
)

 