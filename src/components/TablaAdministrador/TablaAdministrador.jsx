import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const data = [
  {
    _id: "4fgsfigoas22",
    nombre: "1Wireless headphones",
    marca: "CORSAIR",
    tipo: "Auriculares",
    stock: 3,
    precio: 40.99,
    foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
  {
    _id: "4fgsfigoas22",
    nombre: "2Wireless headphones",
    marca: "CORSAIR",
    tipo: "Auriculares",
    stock: 5,
    precio: 40.99,
    foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
  {
    _id: "4fgsfigoas22",
    nombre: "3Wireless headphones",
    marca: "CORSAIR",
    tipo: "Auriculares",
    stock: 5,
    precio: 40.99,
    foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
  {
    _id: "4fgsfigoas22",
    nombre: "4Wireless headphones",
    marca: "CORSAIR",
    tipo: "Auriculares",
    stock: 5,
    precio: 40.99,
    foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
  {
    _id: "4fgsfigoas22",
    nombre: "5Wireless headphones",
    marca: "CORSAIR",
    tipo: "Auriculares",
    stock: 17,
    precio: 40.99,
    foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
  {
    _id: "4fgsfigoas22",
    nombre: "6Wireless headphones",
    marca: "CORSAIR",
    tipo: "Auriculares",
    stock: 15,
    precio: 40.99,
    foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
  {
    _id: "4fgsfigoas22",
    nombre: "7Wireless headphones",
    marca: "CORSAIR",
    tipo: "Auriculares",
    stock: 35,
    precio: 40.99,
    foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
  {
    _id: "4fgsfigoas22",
    nombre: "8Wireless headphones",
    marca: "HyperX",
    tipo: "Auriculares",
    stock: 53,
    precio: 40.99,
    foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
  {
    nombre: "9Wireless headphones",
    marca: "Acer",
    tipo: "Auriculares",
    stock: 1,
    precio: 40.99,
    foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
  {
    _id: "4fgsfigoas22",
    nombre: "10Wireless headphones",
    tipo: "Auriculares",
    marca: "Logitech",
    stock: 17,
    precio: 40.99,
    foto: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
    descripcion: "https://www.corsair.com/lm/es/medias/sys_master/images/images/hb5/h6b/9597775020062/CA-9011185-NA/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-NA-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
];



const TablaAdministrador = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      /*  if (
        !confirm(`Are you sure you want to delete ${row.getValue("nombre")}`)
      ) {
        return;
      } */
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
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
            cell.column.id === "email"
              ? validateEmail(event.target.value)
              : cell.column.id === "age"
              ? validateAge(+event.target.value)
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
        accessorKey: "nombre",
        header: "Nombre",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "marca",
        header: "Marca",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "tipo",
        header: "Tipo",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "color",
        header: "Color",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },

      {
        accessorKey: "precio",
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
        accessorKey: "descripcion",
        header: "Descripcion",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "string",
        }),
      },
      {
        accessorKey: "foto",
        header: "Foto",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "string",
          
        }),
        
      },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
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
        data={tableData}
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
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
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
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );

  const handleSubmit = () => {
    onSubmit(values);
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
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
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

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default TablaAdministrador;
