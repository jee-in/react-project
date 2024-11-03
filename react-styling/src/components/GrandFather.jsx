import React from "react";
import Father from "./Father";

function GrandFather() {
  const houseName = "스파르타";
  const pocketMoney = 10000;

  return <Father houseName={houseName} pocketMoney={pocketMoney} />;
}

export default GrandFather;