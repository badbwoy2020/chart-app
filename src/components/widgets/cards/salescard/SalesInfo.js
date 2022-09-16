import React from "react";
import "./SalesInfo.css";

function SalesInfo({ Icon, title, subtitle, amount, color }) {
  return (
    <div className="salesInfo">
      <div style={{ color: color }}>{Icon}</div>
      <p className="salesInfo-amount">{amount}k</p>
      <h3>{title}</h3>

      <div className="salesInfo-subtitle">
        <p style={{ color: color }}>.</p>
        <h4 style={{ color: color }}>{subtitle}</h4>
      </div>
    </div>
  );
}

export default SalesInfo;
