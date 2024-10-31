import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square({ user, style }) {
  return (
    <div className="squareStyle" id= { user.key }>
      { user.name }

    </div>
  )
}

function App() {

  const users = [
    { id: 1, age: 27, name: "기메다" },
    { id: 2, age: 26, name: "최지인" },
    { id: 3, age: 26, name: "여누팍" },
    { id: 4, age: 27, name: "동동" },
    { id: 5, age: 25, name: "오지니" },
    { id: 6, age: 25, name: "옹심이" },
  ];

  return (
    <div className="style">
      {users.map((user) => {
        return <Square user={user} key={user.id}/>;
      })}
    </div>
  );
}

export default App
