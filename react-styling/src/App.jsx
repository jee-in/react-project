import React from "react";
import { useSelector, useDispatch } from "react-redux";

// 사용할 Action creator를 import
import { minusOne, plusOne } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch(); // dispatch 함수 생성
  
  const number = useSelector((state) => state.counter.number);
  console.log(number);

  return (
    <div>
      {number}
      <button
        onClick={() => {
          dispatch(plusOne());  // 액션 객체를 Action Creator로 변경
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          dispatch(minusOne()); // 액션 객체를 Action Creator로 변경
        }}
      >
        - 1
      </button>
    </div>
  );
};

export default App;