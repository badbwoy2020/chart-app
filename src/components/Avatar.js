import React from "react";

function Avatar({ img }) {
  return (
    <img
      src={img}
      alt=""
      style={{
        borderRadius: 999,
        objectFit: "contain",
        width: 20,
        height: 20,
      }}
    />
  );
}

export default Avatar;
