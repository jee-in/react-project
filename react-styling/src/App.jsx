import { useState } from 'react'
import GlobalStyle from "./components/GlobalStyle.jsx";
import TestPage from "./components/TestPage.jsx";

function App() {
  const title = "전역 스타일링 제목";
  const contents = "전역 스타일링 내용";

  return (
    <>
      <GlobalStyle />
      <TestPage title={title} contents={contents} />
    </>
  )
};

export default App
