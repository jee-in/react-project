import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx';
import User from './components/User.jsx';

// Button, User 컴포넌트를 외부 파일로 분리함 - src > components > Button.js, User.js

function App() {

  // 상태값 만들기
  const [users, setUsers] = useState([
    { id: 1, age: 27, name: "기메다" },
    { id: 2, age: 26, name: "최지인" },
    { id: 3, age: 26, name: "여누팍" },
    { id: 4, age: 27, name: "동동" },
    { id: 5, age: 25, name: "오지니" },
    { id: 6, age: 25, name: "옹심이" },
  ]);
  
  // 유저의 입력값을 담을 상태
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState(users.length + 1);

  // 유저 추가 핸들러
  const addUserHandler = (prevUsers) => {
    // id를 직접 증가시키는 방식은 비동기 상태 업데이트에 문제가 있을 수 있다.
    // setId(id + 1)을 호출할 때 id의 최신 값이 아닐 수 있기 때문에,
    // 여러 번 호출될 경우 같은 id를 가지는 유저가 추가될 수 있다.
  
    // 콜백 함수
    setUsers((prevUsers) => {
      const newUser = {
        id: id,
        age: age,
        name: name,
      };

      return [...prevUsers, newUser];
    });
      
    setId((prevId) => prevId + 1);

    // input 태그 초기화
    setName('');
    setAge('');
  };

  // 유저 삭제 핸들러
  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  }  

  return (
    <div className="app-container">
      <div className="formStyle">
        <input className="input input-user" value={name} placeholder="이름을 입력해 주세요."

        // input event로 들어온 입력값을 name의 값으로 업데이트
        onChange={(e) => setName(e.target.value)}
        />
        <input className="input input-user" value={age} placeholder="나이를 입력해 주세요."

        // input event로 들어온 입력값을 age의 값으로 업데이트
        onChange={(e) => setAge(e.target.value)}
        />
        <Button className={"btn btn-add"} onClick={addUserHandler} >추가하기</Button>
      </div>
      <div className="style">
        {users
          // .filter((user) => user.age <= 26 )
          .map((user) => {
            if (user.age <= 24) {
              return null;
            }

            return <User user={user} key={user.id} handleDelete={deleteUserHandler} />;
          })
        }
      </div>
    </div>
  );
}

export default App
