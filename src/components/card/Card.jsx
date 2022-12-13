import React from "react";
import "./card.css";

export default function Card({objeto}) {
  return (
    <div class="carta">
      <div class="carta-headphone">
        <img
          src={objeto.foto}
          alt="headphone"
        />
      </div>

      <span class="material-symbols-outlined">favorite</span>
      <div className="cartel">DESTACADO</div>

      <div class="carta-infos">
        <h3 class="carta-title">{objeto.nombre}</h3>
        <h2 class="price">
          ${objeto.precio}.<small>99</small>
        </h2>
        <a href="#" class="buy">
          Buy Now
        </a>
      </div>
    </div>
  );
}
