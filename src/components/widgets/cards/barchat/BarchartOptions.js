import React from "react";
import "./BarchartOptions.css";

function BarchartOptions({
  description1,
  description2,
  color1,
  color2,
  price1,
  price2,
}) {
  return (
    <div className="barchartOptions">
      <div className="barchartOptions__info-left">
        <div className="barchartOptions__text-container">
          {color1 && <p style={{ backgroundColor: color1 }}></p>}
          <h2>{description1}</h2>
        </div>
        {price1 && <h4>${price1}</h4>}
      </div>
      <hr style={{ border: "1px solid #2C2D33", height: ".65rem" }} />
      <div className="barchartOptions__info-right">
        <div className="barchartOptions__text-container">
          {color2 && <p style={{ backgroundColor: color2 }}></p>}
          <h2>{description2}</h2>
        </div>
        {price2 && <h4>${price2}</h4>}
      </div>
    </div>
  );
}

export default BarchartOptions;
