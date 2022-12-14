import React from "react";
import { NavLink } from "react-router-dom";
import "../Registrarte/registro.css";
import "./registro.css";

export default function Registro() {
  const registro = () => {
    console.log("registrado");
  };

  return (
    <div className="Ingreso">
      <img
        className="shoppyLogoRegistro"
        src="https://cdn.discordapp.com/attachments/830354293822324736/1051744433550397510/Sin_titulo-2.png"
        alt="logo_shoppy"
      />

      <div className="edFormRegistro">
        <h2>
          REGISTRATE<span className="blanco">.</span>
        </h2>
        <div>
          <form>
          <label>
              NOMBRE
              <input type="text" />
            </label>
            <label>
              APELLIDO
              <input type="text" />
            </label>
            <label>
              EDAD
              <input type="number" />
            </label>
            <label>
              DNI
              <input type="number" />
            </label>
            <label>
              DOMICILIO
              <input type="text" />
            </label>
            <label>
              EMAIL
              <input type="email" />
            </label>
            <label>
              CONTRASEÑA
              <input type="password" />
            </label>
          </form>
          <div className="botonesForm">
            <NavLink className="BotonRegistrarme" to="/ingresar">
              <p>INGRESAR CON CUENTA</p>
            </NavLink>
            <button onClick={registro}>REGISTRATE</button>
          </div>
        </div>
      </div>
      <div className="edFotoRegistro"></div>
      <NavLink to={"/inicio"}>
        <div className="edVolverAInicioRegistro">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            color="#f3f3f3"
            fill="currentColor"
            class="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
          <p>volver</p>
        </div>
      </NavLink>
    </div>
  );
}
