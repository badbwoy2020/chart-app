import React from "react";
import "./Barchat.css";
import Chart from "react-apexcharts";
import BarchartOptions from "./BarchartOptions";

function Barchat() {
  return (
    <div className="barchat">
      <h2>Levels</h2>
      <Chart
        type="bar"
        width={200}
        height={150}
        series={[
          {
            data: [100, 70, 40, 48, 35],
            borderRadius: "4px 4px 0px 0px",
            color: "#A9DFD8",
          },
          {
            data: [30, 50, 20, 30, 20],
            borderRadius: "4px 4px 0px 0px",
            color: "#2B2B36",
          },
        ]}
        options={{
          chart: {
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: 30,
            },
          },
          xaxis: {
            labels: {
              show: false,
              trim: false,
            },
            lines: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
            style: {},
          },
          legend: {
            show: false,
            position: "bottom",
          },
          grid: {
            show: false,
          },

          tooltip: {
            followCursor: false,
          },
          dataLabels: {
            enabled: false,
          },
        }}
      ></Chart>
      <BarchartOptions
        color1="#A9DFD8"
        description1="Volumes"
        color2="#2B2B36"
        description2="Services"
      />
    </div>
  );
}

export default Barchat;
