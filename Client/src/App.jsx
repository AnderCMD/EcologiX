// TODO: Archivo principal de la aplicacion

// ? Importaciones
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// ? Componentes
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/Login" element={<h1>Iniciar Sesion</h1>} />
        <Route path="/Registro" element={<h1>Registro</h1>} />
        <Route path="/Tareas" element={<h1>Tareas</h1>} />
        <Route path="/Agregar-Tarea" element={<h1>Agregar Tarea</h1>} />
        <Route path="/Tareas/:id" element={<h1>Actualizar Tarea</h1>} />
        <Route path="/Perfil" element={<h1>Perfil</h1>} />
      </Routes>
    </BrowserRouter>
  );
}