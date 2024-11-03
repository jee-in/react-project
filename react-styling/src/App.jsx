import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNumber } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    // event.target.value는 문자열이다. 이것을 숫자형으로 형 변환해주기 위해 +를 붙여주었다.
    setNumber(+value);
  };

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  };

  console.log(number);

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button>빼기</button>
    </div>
  );
};

export default App;