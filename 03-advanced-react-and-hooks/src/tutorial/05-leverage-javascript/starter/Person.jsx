import avatar from "../../../assets/default-avatar.svg";
import React from "react";
// eslint-disable-next-line react/prop-types
export function Person({ name, nickName = "shakeAndBake", images }) {
  // eslint-disable-next-line react/prop-types
  //   const img = images?.[0].small?.url || avatar;
  const img = images?.[0].small?.url ?? avatar;

  return (
    <div key={name}>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
