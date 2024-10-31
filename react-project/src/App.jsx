/* <---- 컴포넌트 밖 ----> */

// 내가 필요한 파일을 import하기 
import { useState } from 'react'              // js 파일
import reactLogo from './assets/react.svg'    // 이미지 파일
import viteLogo from '/vite.svg'
import './App.css'                            // CSS 파일

function Button({ content, clickEventHandler }) {
  return (
    <button onClick={ clickEventHandler }>
      { content }
    </button>
  )
}

/* 카운터 앱 */
function App() {
  /* <---- 컴포넌트 안 ----> */
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>{ number }</div>
      <Button content={ "+" } clickEventHandler={ () => setNumber(number + 1) }/>
      <Button content={ "-" } clickEventHandler={ () => setNumber(number - 1) }/>
    </div>
  );
}

// 컴포넌트 밖: 내가 만든 컴포넌트를 밖으로 내보내기 = 렌더링
export default App