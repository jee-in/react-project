import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0);

  // 기존에 사용하던 방식 -> 배치 방식
  // setState(number + 1);

  // 함수형 업데이트. 현재 number의 값을 가져와서 그 값에 +1을 더하여 반환
  // setState((currentNumber) => { return currentNumber + 1 });

  return (
    <div>
        <div>{number}</div>
        <button
          onClick={() => {
            // 1씩 증가: 1~3번 줄의 setNumber가 각각 실행되는 것이 아니라 배치(batch)로 처리됨. 불필요한 리렌더링 방지를 위해(렌더링 최적화를 위해)
            // setNumber(number + 1);
            // setNumber(number + 1);
            // setNumber(number + 1);

            // 3씩 증가: 명령들을 모아 순차적으로 각각 1번씩 실행시킴
            setNumber((previousState) => previousState + 1);
            setNumber((previousState) => previousState + 1);
            setNumber((previousState) => previousState + 1);
          }}
        >
          버튼
        </button>
    </div>
  )
};

export default App
