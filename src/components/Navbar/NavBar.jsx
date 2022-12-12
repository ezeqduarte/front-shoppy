import React, { useState } from "react";
import "../Navbar/navbar.css";

export default function NavBar() {
  let [mostrarMenu, setMostrarMenu] = useState(false);

  const menuOn = (event) => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <header class="bg-transparent">
      <nav class="navbar  navbar-expand-lg pt-2 pt-lg-1">
        <img
          src="https://cdn.discordapp.com/attachments/830354293822324736/1051744433550397510/Sin_titulo-2.png"
          alt="logo_shoppy"
        />
        <div class="px-3 px-lg-5">
          <h1 class="d-flex d-none">Shoppy</h1>
          <div className="menu" onClick={menuOn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            {mostrarMenu ? (
              <ul class="navbar-nav d-md-flex flex-md-row justify-content-md-center align-items-center">
                <li class="nav-item mx-md-3 mx-lg-1">
                  <a class="nav-link">Productos</a>
                </li>
                <li class="nav-item mx-md-3 mx-lg-1">
                  <a class="nav-link">Inicio</a>
                </li>
                <li class="nav-item mx-md-3 mx-lg-1">
                  <a class="nav-link">Contacto</a>
                </li>
              </ul>
            ) : null}
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-md-flex flex-md-row justify-content-md-center align-items-center">
              <li class="nav-item mx-md-3 mx-lg-1">
                <a class="nav-link">Productos</a>
              </li>
              <li class="nav-item mx-md-3 mx-lg-1">
                <a class="nav-link">Inicio</a>
              </li>
              <li class="nav-item mx-md-3 mx-lg-1">
                <a class="nav-link">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="iconos">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="material-symbols-outlined">favorite</span>
          <span className="material-symbols-outlined">shopping_cart</span>
        </div>
      </nav>
    </header>
  );
}
