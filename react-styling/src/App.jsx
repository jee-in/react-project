import React, { useRef, useState } from "react"

function App() {
  // ref 값은 컴포넌트가 계속해서 렌더링되어도 unmount 전까지 값을 유지합니다.
  // state: state는 변화가 일어나면 다시 렌더링이 일어난다.내부 변수들은 초기화된다.
  // ref:   ref에 저장한 값은 렌더링을 일으키지 않는다. ref의 값 변화가 일어나도 렌더링으로 인해 내부 변수들이 초기화되는 것을 막을 수 있다. 컴포넌트가 여러 번 렌더링되어도 ref에 저장한 값은 유지된다.

  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const plusStateCountButtonHandler = () => {
    console.log('plusStateCountButtonHandler 호출');
    setCount(count + 1);
  };

  const plusRefCountButtonHandler = () => {
    console.log('plusRefCountButtonHandler 호출');
    countRef.current++;
  };

  return (
    <>
      <div>
        state 영역입니다. {count} <br />
        <button onClick={plusStateCountButtonHandler}>state 증가</button>
      </div>
      <div>
        ref 영역입니다. {countRef.current} <br />
        <button onClick={plusRefCountButtonHandler}>ref 증가</button>
      </div>
    </>
  )
};

export default App
