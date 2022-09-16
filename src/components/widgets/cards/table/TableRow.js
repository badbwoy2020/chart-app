import React from "react";
import "./TableRow.css";

function TableRow({
  color,
  number,
  product_name,
  percentage,
  progress_number,
}) {
  return (
    <div className="tableRow">
      <p className="tableRow__number">{number}</p>
      <h4 className="tableRow__name">{product_name}</h4>
      <div className="tableRow__progress">
        <div
          style={{
            backgroundColor: color,
            width: progress_number,
            height: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
      <div
        className="tableRow__rate"
        style={{
          backgroundColor: `rgba(${color}, 0.12)`,
          border: `0.5px solid ${color}`,
        }}
      >
        <h5 style={{ color: color }}>{percentage}%</h5>
      </div>
    </div>
  );
}

export default TableRow;
