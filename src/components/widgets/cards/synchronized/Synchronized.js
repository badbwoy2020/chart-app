import React from "react";
import "./Synchronized.css";
import BarchartOptions from "../barchat/BarchartOptions";
import Chart from "react-apexcharts";

function Synchronized() {
  return (
    <div className="synchronized">
      <small style={{ marginTop: 10 }}>Customers Fulfillment</small>
      <Chart
        type="area"
        width={180}
        height={150}
        series={[
          {
            data: [60, 30, 50, 45, 35],
            borderRadius: "4px 4px 0px 0px",
            backgroundColor:
              "linear-gradient(176.93deg, #A9DFD8 -4.07%, rgba(29, 30, 38, 0) 106.79%)",
          },
          {
            data: [80, 100, 40, 15, 30],
            borderRadius: "4px 4px 0px 0px",
            color: "#F2C8ED",
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
          tooltip: {
            followCursor: false,
          },
          legend: {
            show: false,
            position: "bottom",
          },
          grid: {
            show: false,
          },

          // tooltip: {
          //   followCursor: false,
          // },
          dataLabels: {
            enabled: false,
          },
        }}
      ></Chart>

      <BarchartOptions
        color1="#A9DFD8"
        description1="Last Month"
        color2="#F2C8ED"
        description2="This Month"
        price1={500}
        price2={800}
      />
    </div>
  );
}

export default Synchronized;
