import React from "react";
import Avatar from "../Avatar";
import { Bell, Chevrondown, Search } from "../svg";
import AreaFill from "./cards/areaFill/AreaFill";
import Barchat from "./cards/barchat/Barchat";
import Salescard from "./cards/salescard/Salescard";
import Synchronized from "./cards/synchronized/Synchronized";
import Table from "./cards/table/Table";
import Percentage from "./cards/speedpercent/Percentage";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <div className="widgets__header-input ">
          <Search
            style={{ marginLeft: 4, marginRight: 4, color: "white" }}
            width={12}
            height={12}
          />
          <input type="text" placeholder="search" />
        </div>
        <div className="widgets__header-icons">
          <Bell width={16} height={16} color="white" />
          <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrePPz_0Xr32HTVzu_3OhHVaKwaxJ6rWK74ruO-wPi4Bp42cCCt5JSfFLH4L-TEAatR4&usqp=CAU" />
          <Chevrondown width={16} height={16} color="white" />
        </div>
      </div>
      <div className="widgets__items-flex ">
        <Salescard />
        <Barchat />
      </div>
      <div className="widgets__items-flex__big">
        <Table />
        <Synchronized />
      </div>
      <div className="widgets__items-flex-mid">
        <Percentage />
        <AreaFill />
      </div>
    </div>
  );
}

export default Widgets;
