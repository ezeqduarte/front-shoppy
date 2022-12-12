import { Routes, Route } from "react-router-dom";
import Bienvenida from "./pages/Bienvenida/Bienvenida";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Bienvenida />} />
      </Routes>
      {/* <Main>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </Main> */}
    </>
  );
}

export default App;
