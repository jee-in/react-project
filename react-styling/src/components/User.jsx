import React from 'react';
import Button from './Button.jsx';

// User 컴포넌트를 분리해서 구현
function User({ user, handleDelete }) {
  return (
    <div className="squareStyle" id= { user.key }>
      <div>{ user.name }</div>
      <div>({ user.age })</div>
      <Button color="white" className="btn btn-del" onClick={() => handleDelete(user.id)}>
      삭제하기
      </Button>
    </div>
  )
}

export default User;