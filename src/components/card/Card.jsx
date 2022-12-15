import React from "react";
import "./card.css";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Card({ objeto, texto }) {
  /* console.log(objeto); */

  let cartel = "";

  if (objeto.stock < 8) {
    cartel = "POCO STOCK";
  }

  return (
    <div className="card">
      <div className="card-headphone">
        <img src={objeto.photo} alt="headphone" />
      </div>

      <div className="material-symbols-reaction">
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
          checkedIcon={<Favorite />}
        />
      </div>
      <div className="cartel">{cartel}</div>
      <div className="card-infos">
        <h3 className="card-title">{objeto.name}</h3>
        <h2 className="price">$ {objeto.price}</h2>
        <NavLink className="buy" to={`/detalle-producto/${objeto._id}`}>
          {texto}
        </NavLink>
      </div>
    </div>
  );
}
