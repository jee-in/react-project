import React from "react";
import styled from "styled-components";
import GlobalStyle from './components/GlobalStyle';
import CreateForm from './components/CreateForm';
import TodoListContainer from './components/TodoListContainer';

const App = () => {
  return (
    <StContainer>
      <CreateForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;