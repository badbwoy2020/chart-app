import React from "react";
import "./Table.css";
import TableRow from "./TableRow";

function Table() {
  return (
    <div className="table">
      <h2>Top Products</h2>
      <table style={{ width: "100%", padding: 10 }}>
        <th className="table__header-flex">
          <tr className="table__header">#</tr>
          <tr className="table__header">Name</tr>
          <tr className="table__header">Popularity</tr>
          <tr className="table__header">Sales</tr>
        </th>
        <tbody className="table__body-flex" style={{ width: "100%" }}>
          <TableRow
            number="01"
            product_name="Home Decore Sales"
            color="#FCB859"
            progress_number="15.416rem"
            percentage={48}
          />
          <TableRow
            number="02"
            product_name="Disney Princess Dress"
            color="#A9DFD8"
            progress_number="12.284rem"
            percentage={17}
          />
          <TableRow
            number="03"
            product_name="Bathroom Essentials"
            color="#28AEF3"
            progress_number="9.875rem"
            percentage={19}
          />
          <TableRow
            number="04"
            product_name="Apple Smartwatch"
            color="#F2C8ED"
            progress_number="6.021rem"
            percentage={29}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
