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

/* 불변성
 *  * 원시데이터: 수정했을 때 메모리에 저장된 값 자체는 바꿀 수 없다.
                  새로운 메모리 저장 공간에 새로운 값을 저장한다.
    * 다른 데이터: 수정했을 때 기존에 저장되어 있던 메모리 저장 공간의 값 자체를 바꿔준다.
    
    * 원시 데이터가 아닌 데이터의 불변성을 지켜주는 것이 중요한 이유
      * 리액트에서 화면을 리렌더링할지 말지 정할 때, state의 변화를 확인한다.
      * state가 변했으면 리렌더링하는 것이고, state가 변하지 않았으면 리렌더링을 하지 않는다.
      * state가 변했는지 확인하는 방법은 state의 변화 전, 후의 메모리 주소를 비교하는 것이다.
      * 리액트에서 원시 데이터가 아닌 데이터를 수정할 때 불변성을 지켜주지 않고,
      * 직접 수정을 가하면 값은 바뀌지만 메모리 주소는 변함이 없게 된다.
        값이 바뀌어도 리액트는 state가 변했다고 인지하지 못할 수 있다. 마땅히 일어나야 할 리렌더링이 일어나지 않는 것이다.
      * 리액트 불변성 지키기!!
        * 배열을 setState할 때 불변성을 지켜주기 위해, 직접 수정을 가하지 않고 전개 연산자를 사용해서 기존의 값을 복사하고 그 이후에 값을 수정하는 식으로 구현한다.
*/
function App() {
  /* <---- 컴포넌트 안 ----> */

  // input 값을 넣을 value라는 state 생성
  const [dogs, setDogs] = useState(["말티즈"]);

  // 사용자의 input 값을 state로 관리함
  const onClickHandler = (event) => {
    // 전개 연산자를 이용하여 기존의 값을 복사
    setDogs([...dogs, "시고르자브르종"]);
  };

  console.log(dogs);

  return (
    <div>
      <button onClick={onClickHandler}>버튼</button>
    </div>
  )
}

// 컴포넌트 밖: 내가 만든 컴포넌트를 밖으로 내보내기 = 렌더링
export default App