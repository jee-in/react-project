import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square({ user, deleteHandler }) {
  return (
    <div className="squareStyle" id= { user.key }>
      <div>{ user.name }</div>
      <div>({ user.age })</div>
      <button className="btn btn-del" onClick={() => deleteHandler(user.id) }>삭제하기</button>
    </div>
  )
}

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
  const addUserHandler = () => {
    setId(id + 1);

    const newUser = {
      id: id,
      age: age,
      name: name,
    };

    setUsers([...users, newUser]);
  }

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
        <button className="btn btn-add" onClick={addUserHandler} >추가하기</button>
      </div>
      <div className="style">
        {users.map((user) => {
          return <Square user={user} key={user.id} deleteHandler={deleteUserHandler} />;
        })}
      </div>
    </div>
  );
}

export default App
