import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import { DataGrid,GridToolbar  } from "@mui/x-data-grid";
import * as React from "react";
import { useSelector } from "react-redux";
import useStockCall from "../../hooks/useStockCall";
import { btnStyle } from "../../styles/globalStyle";

const columns = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "categoryId",
    headerName: "Category",
    width: 150,
    editable: true,
    valueGetter: (value) => {
      // console.log(value)
      return value.name;
    },
  },
  {
    field: "brandId",
    headerName: "Brand",
    width: 150,
    editable: true,
    valueGetter: (value) => value.name,
  },
  {
    field: "name",
    headerName: "Name",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "quantity",
    headerName: "Stock",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: (params) => (
      // console.log(params)
      <DeleteOutlineIcon
        onClick={() => deleteStockData("products", params.id)}
        sx={btnStyle}
      />
    ),
  },
];

// const rows = [
//   { id: 1, firstName: 'Snow', lastName: 'Jon', age: 14 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

function getRowId(row) {
  console.log(row);
  //   return row.name;
  return row._id;
}
export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  const { deleteStockData } = useStockCall();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      minWidth: 40,
      maxWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "categoryId",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      editable: false,
      flex: 2,
      valueGetter: (value) => {
        // console.log(value)
        return value?.name ?? "-No Category-";
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 150,
      flex: 2,
      headerAlign: "center",
      align: "center",
      valueGetter: (value) => value?.name ?? "-No Brand-",
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      width: 110,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 40,
      flex: 1,
      renderCell: (params) => (
        // console.log(params)
        <DeleteOutlineIcon
          // onClick={() => deleteStockData("products", params.row._id)}
          onClick={() => deleteStockData("products", params.id)}
          sx={btnStyle}
        />
      ),
    },
  ];
  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={getRowId}
        pageSizeOptions={[5, 10, 25]}
        // checkboxSelection
        disableRowSelectionOnClick
        slots={{
            toolbar: GridToolbar,
          }}
      />
    </Box>
  );
}
