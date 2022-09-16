import React from "react";
import {
  Dashboard,
  Favourite,
  Message,
  Product,
  Salesreport,
  Settings,
  Shoppingcart,
  Signout,
  User,
  History,
} from "../svg/index";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div
          className="sidebar__header-icons"
          style={{ backgroundColor: "#EA1701" }}
        ></div>
        <div
          className="sidebar__header-icons"
          style={{ backgroundColor: "#FEB002" }}
        ></div>
        <div
          className="sidebar__header-icons"
          style={{ backgroundColor: "#029F04" }}
        ></div>
      </div>
      <div className="sidebar__items sidebar__current">
        <div
          className="sidebar__items-bd"
          style={{
            borderRight: "2px solid #a9dfd8",
            padding: ".45rem",
            height: 14,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <User width={20} height={20} />
        </div>

        <p style={{ color: "#000" }}>Profile</p>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__items-bd">
          <Dashboard width={20} height={20} />
        </div>

        <p>Leaderboard</p>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__items-bd">
          <Shoppingcart width={20} height={20} />
        </div>

        <p>Order</p>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__items-bd">
          <Product width={20} height={20} />
        </div>

        <p>Product</p>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__items-bd">
          <Salesreport width={20} height={20} />
        </div>

        <p>Sales Report</p>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__items-bd">
          <Message width={20} height={20} />
        </div>

        <p>Message</p>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__items-bd">
          <Settings width={20} height={20} />
        </div>

        <p>Settings</p>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__items-bd">
          <Favourite width={20} height={20} />
        </div>

        <p>Favourite</p>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__items-bd">
          <History width={20} height={20} />
        </div>

        <p>History</p>
      </div>
      <div className="sidebar__items">
        <div className="sidebar__items-bd">
          <Signout width={20} height={20} />
        </div>

        <p>Signout</p>
      </div>
    </div>
  );
}

export default Sidebar;
