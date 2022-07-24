import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const createRowData = (item, qty, unit) => {
  return {
    item: item,
    qty: qty,
    unit: unit,
    price: qty * unit,
  };
};
const rows = [
  createRowData("Jeans", 1, 700),
  createRowData("Shirt", 2, 800),
  createRowData("Shoes", 1, 100),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = 0.3 * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export const Review = () => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 200 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.item} sx={{ height: 1 }}>
              <TableCell>{row.item}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{row.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}

          <TableRow sx={{ height: 1 }}>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{invoiceSubtotal.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow sx={{ height: 1 }}>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(0.7 * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{invoiceTaxes.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow sx={{ height: 1 }}>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{invoiceTotal.toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
