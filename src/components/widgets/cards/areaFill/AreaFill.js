import React from "react";
import "./AreaFill.css";
import Chart from "react-apexcharts";

function AreaFill() {
  return (
    <div className="areaFill">
      <h2>Visitors Insights</h2>

      <Chart
        type="area"
        width="100%"
        height="100%"
        series={[
          {
            data: [100, 700, 300, 500, 200, 600, 900, 400, 1000, 700, 50],
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
              show: true,
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
            categories: [
              "Jan",
              "Feb",
              "march",
              "April",
              "May",
              "June",
              "July",
              "August",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ],
            style: {},
          },
          yaxis: {
            labels: {
              show: true,
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
    </div>
  );
}

export default AreaFill;
