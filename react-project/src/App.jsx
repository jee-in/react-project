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

function App() {
  /* <---- 컴포넌트 안 ----> */
  const [count, setCount] = useState(0)

  return (
    <div>
      <Child1 />
      <Child2 />
    </div>
  );
}

function Child1({ name }) {
  // 부모가 이름을 전달해주기 전까지 쓸 default 값이 필요하다.
  return <p>자식 이름은 { name }입니다.</p>
}

// default props 지정하기 (1)
Child1.defaultProps = {
  name : "오지니"
}

// dafault props 지정하기 (2) : default argument
function Child2({ name = "투틴" }) {
  return <p>두 번째 자식 이름은 { name }입니다.</p>
}

// 컴포넌트 밖: 내가 만든 컴포넌트를 밖으로 내보내기 = 렌더링
export default App
