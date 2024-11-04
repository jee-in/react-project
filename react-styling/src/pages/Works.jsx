import React from "react";
import { useLocation } from "react-router-dom";

const Works = () => {
  const location = useLocation();
  console.log("location :>> ", location);

  return (
    <div>
      <div>{`현재 페이지: ${location.pathname.slice(1)}`}</div>
    </div>
  );
};

export default Works;