import React from "react";
import "./card.css";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Card({ objeto }) {
  return (
    <div className="card">
      <div className="card-headphone">
        <img
          src={objeto.foto}
          alt="headphone"
        />
      </div>
      
      <div className="material-symbols-reaction"><Checkbox {...label} icon={<FavoriteBorder />} sx={{color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },}} checkedIcon={<Favorite />} />
</div>
      
      <div className="cartel">DESTACADO</div>
      <div className="card-infos">
        <h3 className="card-title">{objeto.nombre}</h3>
        <h2 className="price">
          $ {objeto.precio}
        </h2>
        <a href="#" className="buy">
          Buy Now
        </a>
      </div>
    </div>
  );
}
