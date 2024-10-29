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

// 자식 컴포넌트
function Child() {
  return <div>나는 자식입니다.</div>
}

// 부모 컴포넌트
function Parent() {
  return <Child />;
}

// 할아버지 컴포넌트
function GrandParent() {
  return <Parent />
}

function App() {
  /* <---- 컴포넌트 안 ----> */
  const [count, setCount] = useState(0)

  // 자식 컴포넌트를 App Component에서 마치 HTML 태그를 쓰듯이 넣기
  return <GrandParent />;
}

// 컴포넌트 밖: 내가 만든 컴포넌트를 밖으로 내보내기 = 렌더링
export default App
