import React from "react";
import "../Navbar/navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <img
        src="https://cdn.discordapp.com/attachments/830354293822324736/1051744433550397510/Sin_titulo-2.png"
        alt="logo_shoppy"
      />
      <ul>
        <li>PRODUCTOS</li>
        <li>INICIO</li>
        <li>CONTACTO</li>
      </ul>
      <div className="iconos">
        <span className="material-symbols-outlined">account_circle</span>
        <span className="material-symbols-outlined">favorite</span>
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
    </div>
  );
}
