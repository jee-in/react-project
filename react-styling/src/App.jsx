import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch(); // dispatch 함수 생성
  
  const number = useSelector((state) => state.counter.number);
  console.log(number);

  return (
    <div>
      {number}
      <button
        onClick={() => {
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MINUS_ONE" });
        }}
      >
        - 1
      </button>
    </div>
  );
};

export default App;