import React, { useCallback, useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Delete, Edit, PhotoCamera } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import productsActions from "../../redux/actions/productsActions";
import "./tablaadministrador.css";

const TablaAdministrador = () => {
  let { TodosLosproductos, refresh } = useSelector(
    (store) => store.productsReducer
  );
  let { token } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  const { productos, nuevoProducto, eliminarProducto, editarProducto } =
    productsActions;

  useEffect(() => {
    dispatch(productos());
  }, [refresh]);

  const [createModalOpen, setCreateModalOpen] = useState(false);

  const [tableData, setTableData] = useState(() => TodosLosproductos);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = async (values) => {
    let dateOriginal = new Date();

    function formatoFecha(fecha, formato) {
      const map = {
        dd: fecha.getDate(),
        mm: fecha.getMonth() + 1,
        yy: fecha.getFullYear().toString().slice(-2),
        yyyy: fecha.getFullYear(),
      };

      return formato.replace(/dd|mm|yy|yyy/gi, (matched) => map[matched]);
    }

    let date = formatoFecha(dateOriginal, "dd/mm/yy");

    const nuevoProductoBody = {
      name: values.name,
      category: values.category,
      photo: values.photo,
      brand: values.brand,
      price: Number(values.price),
      stock: Number(values.stock),
      dateCreated: date,
      specifications: {},
    };

    console.log(nuevoProductoBody);

    const dispatchNuevoProducto = await dispatch(
      nuevoProducto({ token, producto: nuevoProductoBody })
    );

    console.log(dispatchNuevoProducto.payload.success);

    if (dispatchNuevoProducto.payload.success) {
      toast.error(` Se creo el producto correctamente `, {
        position: "bottom-left",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatchNuevoProducto.payload.response.map((x) =>
        toast.error(` ${x} `, {
          position: "bottom-left",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
    }

    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    //send/receive api updates here, then refetch or update local table data for re-render

    dispatch(
      editarProducto({ token: token, producto: values, id: row.original._id })
    );

    toast.success(
      ` ${row.original.category}  ${row.original.brand} ${row.original.name} fue modificado `,
      {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

    //required to exit editing mode and close modal

    setTableData([...tableData]);
    exitEditingMode();
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row, token) => {
      Swal.fire({
        title: `Quieres eliminar ${row.original.brand} ${row.original.name}? `,
        imageUrl: "https://img.icons8.com/ios-glyphs/60/ef837b/break.png",
        showCancelButton: true,
        cancelButtonColor: "#c3c3c3",
        confirmButtonColor: "#c3c3c3",
        confirmButtonText: "Eliminarlo",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(eliminarProducto({ token: token, id: row.original._id }));
          Swal.fire(
            "Eliminado",
            `${row.original.brand} ${row.original.name} se elimino correctamente`,
            "success"
          );
        }
      });
    },

    [tableData]
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === "name"
              ? validateName(event.target.value)
              : cell.column.id === "stock"
              ? validateStock(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Nombre",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "brand",
        header: "Marca",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "category",
        header: "Tipo",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },

      {
        accessorKey: "price",
        header: "Precio",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "number",
        }),
      },
      {
        accessorKey: "stock",
        header: "Stock",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "number",
        }),
      },

      {
        accessorKey: "photo",
        header: "Foto",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "text",
        }),
      },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <ToastContainer />
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={columns}
        data={TodosLosproductos}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton
                color="error"
                onClick={() => handleDeleteRow(row, token)}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Nuevo producto
          </Button>
        )}
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onSubmit={handleCreateNewRow}
        onClose={() => setCreateModalOpen(false)}
      />
    </>
  );
};

export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );

  const [prueba, setPrueba] = useState("Ingrese una foto por favor");

  const nuevaFoto = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setPrueba(e.target.value);
    toast.success(` La foto se agregó exitosamente `, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = () => {
    onSubmit(values);
    setPrueba("");
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Crear producto</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            <TextField
              placeholder="Placeholder"
              label={"Nombre"}
              name={"name"}
              size="small"
              onChange={(e) =>
                setValues({
                  ...values,
                  [e.target.name]:
                    e.target.value.slice(0, 1).toUpperCase() +
                    e.target.value.slice(1).toLowerCase(),
                })
              }
              inputProps={"ariaLabel"}
            />

            <TextField
              label={"Marca"}
              name={"brand"}
              size="small"
              onChange={(e) =>
                setValues({
                  ...values,
                  [e.target.name]:
                    e.target.value.slice(0, 1).toUpperCase() +
                    e.target.value.slice(1).toLowerCase(),
                })
              }
            />
            <TextField
              label={"Tipo"}
              name={"category"}
              size="small"
              onChange={(e) =>
                setValues({
                  ...values,
                  [e.target.name]:
                    e.target.value.slice(0, 1).toUpperCase() +
                    e.target.value.slice(1).toLowerCase(),
                })
              }
            />
            <TextField
              label={"Precio"}
              name={"price"}
              size="small"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <TextField
              label={"Stock"}
              name={"stock"}
              size="small"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <div style={{ display: "flex" }}>
              <TextField
                className="ingresarFotoTexto"
                disabled
                label={prueba}
                size="small"
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                label="Foto"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  name="photo"
                  onChange={nuevaFoto}
                />
                <PhotoCamera />
              </IconButton>
            </div>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancelar</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Crear producto
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value) => console.log(value);
const validateName = (name) => !!name.length && name.toLowerCase();

const validateStock = (stock) => stock >= 1;

export default TablaAdministrador;
