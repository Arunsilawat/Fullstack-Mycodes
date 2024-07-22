import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'
import CourseComponent from './Context/CourseComponent.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
<CourseComponent>
<App/>
</CourseComponent>
)

 