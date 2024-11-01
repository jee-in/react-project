import { useState } from 'react'
// styled-components에서 styled라는 키워드를 import한다.
import styled from "styled-components";

function TestPage(props) {
  return (
    <Wrapper>
        <Title>{props.title}</Title>
        <Contents>{props.contents}</Contents>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
`

const Contents = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 100px 100px;
  max-width: 400px;
`;

export default TestPage;