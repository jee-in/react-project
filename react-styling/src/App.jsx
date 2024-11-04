import React from "react";
import styled from "styled-components";
import GlobalStyle from './components/GlobalStyle';
import CreateForm from './components/CreateForm';
import TodoListContainer from './components/TodoListContainer';
import Router from "./shared/Router.jsx";

const App = () => {
  return (
    // <StContainer>
    //   <CreateForm />
    //   <TodoListContainer />

    // </StContainer>
    <Router />
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;