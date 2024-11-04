/* <---- 컴포넌트 밖 ----> */

// 내가 필요한 파일을 import하기 
import { useEffect, useState } from 'react'              // js 파일
import reactLogo from './assets/react.svg'    // 이미지 파일
import viteLogo from '/vite.svg'
import './App.css'                            // CSS 파일
import axios from 'axios';

function Button({ content, clickEventHandler }) {
  return (
    <button onClick={ clickEventHandler }>
      { content }
    </button>
  )
}

// API 요청을 위한 함수 분리
const fetchData = async () => {
  try {
    const response = await axios.get('https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=KKkeXl1EcNrKF%2Fu0a6T6TV4Ll178lMVo6%2BxmPzZBCsPBI%2BRrZgbbMOQebImiCwn8iR82YWV1TnW%2Fqu7PaDo2bw%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0');
    console.log('정상처리 되었습니다.');
    
    const items = response.data.response.body.items;

    items.forEach(item => {
      console.log(item.stationName, item.pm10Grade, item.pm25Grade, item.dataTime);
    })
  } catch (error) {
    console.log('오류가 발생하였습니다. : ' + error);
  } finally {
    console.log('항상 실행되는 부분입니다!');
  };
}


/* 카운터 앱 */
function App() {
  /* <---- 컴포넌트 안 ----> */
  const [number, setNumber] = useState(0);
  // 가짜 서버
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("통신 성공");
        return response.json();
      })
      .then((json) => {
        console.log("json 가져오기 성공");
        setData([...json]);
      });
  }, []);

  return (
    <div>
      <h2>타이머</h2>
      <div>
        <div>{ number }</div>
        <Button content={ "+" } clickEventHandler={ () => setNumber(number + 1) }/>
        <Button content={ "-" } clickEventHandler={ () => setNumber(number - 1) }/>
      </div>
      <h2>비동기 통신</h2>
      <div>
        <Button content={ "api 요청" } clickEventHandler={fetchData}/>
      </div>
      <div style={{ textAlign: 'left' }}>
        {data.map((item) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "3px",
              }}
              key={item.id}
            >
              <ul>
                <li>userId : {item.userId}</li>
                <li>id : {item.id}</li>
                <li>title : {item.title}</li>
                <li>body : {item.body}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 컴포넌트 밖: 내가 만든 컴포넌트를 밖으로 내보내기 = 렌더링
export default App