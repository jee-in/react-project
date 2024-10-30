/*
 * 리액트에서는 JSX 문법을 사용해서 React component를 만들고, DOM에 렌더링시킴으로써 뷰를 그린다.
 * JSX를 쓰면 자바스크립트 안에 html 태그 같은 마크업을 넣어 뷰 작업을 편하게 할 수 있다.
 * const test_el = <div><h1>안녕</h1></div> 
 * 위와 같은 태그는 정확히는 DOM 요소가 아니라 React DOM을 구성하는 React component이다.
 * JSX: 함수로 만들어진 컴포넌트를 html 태그를 사용하듯이 코드를 작성하는 방식
*/

/* <---- 컴포넌트 밖 ----> */

// 내가 필요한 파일을 import하기 
import { useState } from 'react'              // js 파일
import reactLogo from './assets/react.svg'    // 이미지 파일
import viteLogo from '/vite.svg'
import './App.css'                            // CSS 파일

// prop driling의 예시
// 부모에서 자식의 자식의 자식으로 데이터를 전달하기 위해 3번이나 데이터를 내려주고 있따.
// props가 아래로 뚫고 내려간다고 하여 이러한 상황을 prop drilling이라고 한다.
// 이와 같은 패턴은 피해야 한다. 이를 피하기 위해 나중에 'Redux'와 같은 데이터 상태관리 툴을 배우게 된다.
function App() {
  /* <---- 컴포넌트 안 ----> */
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <FirstComponent content="Who needs me?" />
    </div>
  );
}

function FirstComponent({ content }) {
  return (
    <div>
      {/* <h1>{ content }</h1> */}
      <h3>I am the first component</h3>
      <SecondComponent content={content} />
    </div>
  );
}

function SecondComponent({ content }) {
  return (
    <div>
      <h3>I am the second component</h3>
      <ThirdComponent content={content}/>
    </div>
  );
}

function ThirdComponent({ content }) {
  return (
    <div>
      <h3>I am the third component.</h3>
      <ComponentNeedingProps content={content}/>
    </div>
  )
}

// props 객체를 구조 분해하여 content 속성만 가져옴
function ComponentNeedingProps({ content }) {
  return <h3>{ content }</h3>;
}

// 컴포넌트 밖: 내가 만든 컴포넌트를 밖으로 내보내기 = 렌더링
export default App
