import React, { useState, useCallback } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

const boxesStyle = {
  display: "flex",
  marginTop: "10px",
};

function App() {
  console.log("App 컴포넌트가 렌더링되었습니다!");

  const [count, setCount] = useState(0);

  // count를 초기화해주는 함수
  // const initCount = () => {
  //   setCount(0);
  // };

  const initCount = useCallback(() => {
    console.log(`[COUNT 변경] ${count}에서 0으로 변경되었습니다.`);
    setCount(0);
  }, [count]);  // dependency array가 비어 있으면 count가 0일 때의 시점을 기준으로 메모리에 함수를 저장함

  // 1을 증가시키는 함수
  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  // 1을 감소시키는 함수
  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>카운트 예제입니다!</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={boxesStyle}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;