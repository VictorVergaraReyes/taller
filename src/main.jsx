import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './modules/header'
import Carrusel from './modules/carrousel'
import Scrollspy from './modules/texto'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Carrusel></Carrusel>
    <Scrollspy/>
  </>,
)
