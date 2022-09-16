import React from "react";
import "./Percentage.css";
import Chart from "react-apexcharts";

function Percentage() {
  return (
    <div className="percentage">
      <h4>Earnings</h4>
      <small>Total Expenses</small>
      <p>$6078.76</p>
      <h5>Profit is 48% More than last Month</h5>
      <Chart
        type="radialBar"
        width={200}
        height={200}
        series={["85"]}
        options={{
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              offsetY: -20,
              sparkline: {
                // enabled: true,
              },
              dataLabels: {
                show: true,
                name: {
                  color: "#a9dfd8",
                },
                value: {
                  show: false,
                  // to color the value too
                },
              },
              track: {
                background: "#fff",
                strokeWidth: "80%",
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: false,
                  top: 2,
                  left: 0,
                  color: "#eee",
                  opacity: 1,
                  // blur: 2,
                },
              },
            },
          },
          grid: {
            show: false,
          },

          tooltip: {
            followCursor: false,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
            },
          },
          grid: {
            padding: {
              top: -10,
            },
          },

          fill: {
            // type: "gradient",
            colors: "#a9dfd8",
            gradient: {
              shade: "light",
              // shadeIntensity: 0.4,
              // inverseColors: false,
              opacityFrom: 0,
              opacityTo: 1,
              stops: [0, 50, 53, 91],
            },
          },
          labels: ["85%"],
        }}
      ></Chart>
    </div>
  );
}

export default Percentage;
