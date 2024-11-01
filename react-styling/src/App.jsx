import { useState } from 'react'

// styled-components에서 styled라는 키워드를 import한다.
import styled from "styled-components";

// styled 키워드를 사용해서 styled-components 방식대로 컴포넌트를 만든다.
const AppContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const StBox = styled.div`
  // 이 안에 스타일 코드를 작성한다. css와 동일하다.
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: center; // 수평
  align-items: center;     // 수직
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.$borderColor};
`;

// 박스의 색 담기
const boxList = ["red", "green", "blue"];

// 색을 넣으면 박스의 이름을 반환해주는 switch-case문을 가진 함수
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간 박스";
    case "green":
      return "초록 박스";
    case "blue":
      return "파란 박스";
    default:
      return "검정 박스";
  }
}

function App() {
    return (
      <AppContainer>
        {boxList.map((box, index) => (
          <StBox key={index} $borderColor={box}>
            <p>{getBoxName(box)}</p>
          </StBox>
        ))}
      </AppContainer>
    )
  };

export default App
