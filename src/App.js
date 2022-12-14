import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Administrador from "./pages/Administrador/Administrador";
import Bienvenida from "./pages/Bienvenida/Bienvenida";
import Carrito from "./pages/Carrito/Carrito";
import Consultas from "./pages/Consultas/Consultas";
import Ingresar from "./pages/Ingresar/Ingresar";
import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import Registro from "./pages/Registrarte/Registro";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Bienvenida />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      <Main>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/admin" element={<Administrador />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
