import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Bienvenida from "./pages/Bienvenida/Bienvenida";
import Inicio from "./pages/Inicio/Inicio";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Bienvenida />} />
      </Routes>
      <Main>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
