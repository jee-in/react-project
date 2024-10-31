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

function GrandParent() {
  // 익숙한 코드
  // const name = "동현";
  
  /* state 관리를 위한 코드
   *  * useState라는 함수=기능=훅을 이용하여 state를 만들기
   *  * [] 빈 배열 생성, 첫 번째 자리에 state 이름, 두 번째 자리에 `set + state 이름`
   *  * useState() 인자로는 초기값 initial state 전달
  */
  const [name, setName] = useState("동현");   
  return <Parent grandParentName={name} setName={setName} />
}

function Parent(props) {
  return <Child grandParentName={props.grandParentName} setName={props.setName} />;
}

function Child(props) {
  return (
    <div>
      <button onClick={()=> {
        // setName을 통해서 바꾼 값은 어디에 저장되는 것이 아니기 때문에
        // 단순히 화면에서만 바뀐 값으로 다시 렌더링된다.
        props.setName("병찬");
      }}>할아버지 이름 바꾸기
      </button>
      <div>할아버지 이름은 {props.grandParentName}입니다.</div>
    </div>
  )
}

function App() {
  /* <---- 컴포넌트 안 ----> */
  return <GrandParent />
}

// 컴포넌트 밖: 내가 만든 컴포넌트를 밖으로 내보내기 = 렌더링
export default App