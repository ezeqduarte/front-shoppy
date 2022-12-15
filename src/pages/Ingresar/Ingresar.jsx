import { IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import * as React from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { NavLink } from "react-router-dom";
import "./ingresar.css";

export default function Ingresar() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const ingresar = () => {
    console.log("Ingrese");
  };

  return (
    <div className="Ingreso">
      <img
        className="shoppyLogoIngreso"
        src="https://cdn.discordapp.com/attachments/830354293822324736/1051744433550397510/Sin_titulo-2.png"
        alt="logo_shoppy"
      />
      <div className="edFotoIngreso"></div>
      <div className="edFormIngreso">
        <h2>
          INGRESO<span className="blanco">.</span>
        </h2>
        <div>
          <form>
            <TextField
              id="standard-number"
              label="Email"
              type="email"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </form>
          <div className="botonesForm">
            <NavLink className="BotonRegistrarme" to="/registro">
              <p>REGISTRARME</p>
            </NavLink>
            <button onClick={ingresar}>INGRESA A SHOPPY</button>
          </div>
        </div>
      </div>
      <NavLink to={"/inicio"}>
        <div className="edVolverAInicio">
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
