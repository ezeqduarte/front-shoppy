import React from "react";
import "./card.css";

export default function Card({ objeto }) {
  return (
    <div class="card">
      <div class="card-headphone">
        <img
          src={objeto.foto}
          alt="headphone"
        />
      </div>

      <div class="card-infos">
        <h3 class="card-title">{objeto.nombre}</h3>
        <h2 class="price">
          $ {objeto.precio}
        </h2>
        <a href="#" class="buy">
          Buy Now
        </a>
      </div>
    </div>
  );
}
