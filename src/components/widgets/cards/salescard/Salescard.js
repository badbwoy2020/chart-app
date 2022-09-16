import React from "react";
import { ChartSquare } from "../../../svg";
import Battery from "../../../svg/Battery";
import Shoppingbag from "../../../svg/Shoppingbag";
import Useradd from "../../../svg/Useradd";
import "./Salescard.css";
import SalesInfo from "./SalesInfo";

function Salescard() {
  return (
    <div className="salescard">
      <div className="salescard__header">
        <h2>Today's Sales</h2>
        <small>sales summary</small>
      </div>
      <div className="salescard__items-flex">
        <SalesInfo
          Icon={<ChartSquare width={25} height={25} />}
          color="#FEB95A"
          amount={15}
          title="Total Sales"
          subtitle="10% from yesterday"
        />
        <SalesInfo
          Icon={<Battery width={25} height={25} />}
          color="#A9DFD8"
          amount={500}
          title="Total Order"
          subtitle="8% from yesterday"
        />
        <SalesInfo
          Icon={<Shoppingbag width={25} height={25} />}
          color="#F2C8ED"
          amount={9}
          title="Products Sold"
          subtitle="25% from yesterday"
        />
        <SalesInfo
          Icon={<Useradd width={25} height={25} />}
          color="#20AEF3"
          amount={12}
          title="New Customer"
          subtitle="3% from yesterday"
        />
      </div>
    </div>
  );
}

export default Salescard;
