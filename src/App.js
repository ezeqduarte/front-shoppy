import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Administrador from "./pages/Administrador/Administrador";
import Bienvenida from "./pages/Bienvenida/Bienvenida";
import Carrito from "./pages/Carrito/Carrito";
import Consultas from "./pages/Consultas/Consultas";
import DetalleProducto from "./pages/DetalleProducto/DetalleProducto";
import Error404 from "./pages/Error404/Error404";
import Ingresar from "./pages/Ingresar/Ingresar";
import Inicio from "./pages/Inicio/Inicio";
import PerfilUser from "./pages/PerfilUser/PerfilUser";
import Productos from "./pages/Productos/Productos";
import Registro from "./pages/Registrarte/Registro";
import userActions from "./redux/actions/userActions";

function App() {
  let { rol, nombre, apellido, logged, token } = useSelector(
    (store) => store.userReducer
  );
  const { reIngress } = userActions;
  const dispatch = useDispatch();


  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      dispatch(reIngress(token.token.user));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="" element={<Bienvenida />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      <Main>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/admin" element={<Administrador />} />
          <Route path="/perfil" element={<PerfilUser />} />
          <Route path="/detalle-producto/:id" element={<DetalleProducto />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
