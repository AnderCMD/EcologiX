// TODO: Archivo principal de la aplicacion

// ? Importacion de las dependencias
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ? Importacion de los estilos globales
import './index.css' // Importamos el css global
import './Assets/FontAwesome6/css/all.css' // Importamos los iconos de fontawesome

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
