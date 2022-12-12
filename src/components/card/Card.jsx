import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div class="carta">
      <div class="carta-headphone">
        <img
          src="https://www.corsair.com/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H"
          alt="headphone"
        />
      </div>

      <span class="material-symbols-outlined">favorite</span>
      <div className="cartel">DESTACADO</div>

      <div class="carta-infos">
        <h3 class="carta-title">Wireless Headphones</h3>
        <h2 class="price">
          $40.<small>99</small>
        </h2>
        <a href="#" class="buy">
          Buy Now
        </a>
      </div>
    </div>
  );
}
