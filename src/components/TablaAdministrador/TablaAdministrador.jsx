import React, { useEffect, useState } from "react";
import "../../pages/Productos/productos.css";
import "./tablaadministrador.css";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../../redux/actions/productsActions";
import CardAdministrador from "../CardAdministrador/CardAdministrador";
const { productos, productosFiltrados } = productsActions;

export default function TablaAdministrador() {
  let { TodosLosproductos } = useSelector((store) => store.productsReducer);
  let { productosFiltradosArray } = useSelector(
    (store) => store.productsReducer
  );

  let [value, setValue] = React.useState("");
  let [inputValue, setInputValue] = React.useState("");

  let [value2, setValue2] = React.useState("");
  let [inputValue2, setInputValue2] = React.useState("");

  let [value3, setValue3] = React.useState("");
  let [inputValue3, setInputValue3] = React.useState("");

  let [value4, setValue4] = React.useState("");
  let [inputValue4, setInputValue4] = React.useState("");

  const dispatch = useDispatch();
  let [nombre, setNombre] = useState(null);

  let [minimo, setMinimo] = useState(null);
  let [maximo, setMaximo] = useState(null);

  let [peticion, setPeticion] = useState("");

  const tipos = [...new Set(TodosLosproductos.map((x) => x.category))];
  const marcas = [...new Set(TodosLosproductos.map((x) => x.brand))];

  const productosTotales = async () => {
    dispatch(productos());
  };

  useEffect(() => {
    productosTotales();
  }, []);

  const filtroTexto = (e) => {
    setNombre(e.target.value);
  };

  const filtroMaxPrice = (e) => {
    setMinimo(e.target.value);
  };
  const filtroMinPrice = (e) => {
    setMaximo(e.target.value);
  };

  useEffect(() => {
    let peticionVariable = "?";

    if (nombre !== "" && nombre !== null) {
      peticionVariable += `name=${nombre}&`;
    }
    if (value !== "" && value !== null) {
      peticionVariable += `category=${value}&`;
    }
    if (value2 !== "" && value2 !== null) {
      peticionVariable += `brand=${value2}&`;
    }
    if (minimo !== "" && minimo !== null) {
      peticionVariable += `minPrice=${minimo}&`;
    }
    if (maximo !== "" && maximo !== null) {
      peticionVariable += `maxPrice=${maximo}&`;
    }

    setPeticion(peticionVariable);
  }, [nombre, value, value2, minimo, maximo]);

  const peticionProductosFiltrados = async () => {
    dispatch(productosFiltrados({ peticion: peticion }));
  };

  useEffect(() => {
    peticionProductosFiltrados();
  }, [peticion]);

  return (
    <>
      <div className="ContainerAdminPrincipal" id="productos">
        <div className="mc-containerTitulosProductos">
          <h2 className="tituloAdmin">
            Nuestros productos<span className="blanco">.</span>
          </h2>
        </div>
        <div className="containerFiltrosAdmin">
          <TextField
            onChange={filtroTexto}
            id="name"
            label="Nombre"
            variant="outlined"
            sx={{ width: 315 }}
          />

          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={tipos}
            sx={{ width: 315 }}
            renderInput={(params) => <TextField {...params} label="Tipo" />}
          />

          <Autocomplete
            value={value2}
            onChange={(event, newValue) => {
              setValue2(newValue);
            }}
            inputValue={inputValue2}
            onInputChange={(event, newInputValue) => {
              setInputValue2(newInputValue);
            }}
            id="controllable-states-demo"
            options={marcas}
            sx={{ width: 315 }}
            renderInput={(params) => <TextField {...params} label="Marca" />}
          />

          <div className="containerPreciosAdmin">
            <TextField
              id="maxPrice"
              onChange={filtroMaxPrice}
              placeholder="$ Maximo"
              sx={{ width: 150 }}
              type="number"
              variant="outlined"
            />
            <h5 style={{ margin: 0 }}>-</h5>
            <TextField
              id="minPrice"
              onChange={filtroMinPrice}
              placeholder="$ Maximo"
              type="number"
              sx={{ width: 150 }}
              variant="outlined"
            />
          </div>

          <Autocomplete
            value={value4}
            onChange={(event, newValue) => {
              setValue4(newValue);
            }}
            inputValue={inputValue4}
            onInputChange={(event, newInputValue) => {
              setInputValue4(newInputValue);
            }}
            id="controllable-states-demo"
            options={["Menor precio", "Mayor precio"]}
            sx={{ width: 315 }}
            renderInput={(params) => <TextField {...params} label="Precio" />}
          />
          <Autocomplete
            value={value3}
            onChange={(event, newValue) => {
              setValue3(newValue);
            }}
            inputValue={inputValue3}
            onInputChange={(event, newInputValue) => {
              setInputValue3(newInputValue);
            }}
            id="controllable-states-demo"
            options={["Bajo stock", "Alto stock"]}
            sx={{ width: 315 }}
            renderInput={(params) => <TextField {...params} label="Stock" />}
          />
        </div>
        <div className="mc-containerCardsProductos">
          {productosFiltradosArray.length > 0 ? (
            productosFiltradosArray.map((x) => (
              <CardAdministrador producto={x} key={x._id}></CardAdministrador>
            ))
          ) : (
            <h4>No se encontraron productos con su busqueda</h4>
          )}
        </div>
      </div>
    </>
  );
}
