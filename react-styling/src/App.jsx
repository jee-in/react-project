import React, { useEffect, useRef, useState } from "react"

function App() {
  const [id, setId] = useState("");
  const idRef = useRef("");
  const pwRef = useRef("");

  // 렌더링이 될 때
  useEffect(() => {
    idRef.current.focus();
  }, []);

  // 아이디 10글자 이상 입력 시 비밀번호 인풋 태그로 포커스를 이동
  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };

  useEffect(() => {
    if (id.length >= 10) {
      pwRef.current.focus();
    }
  }, [id]);

  return (
    <>
      <div>
        아이디: <input type="text" ref={idRef} value={id} onChange={onIdChangeHandler}/>
      </div>
      <div>
        비밀번호: <input type="password" ref={pwRef} />
      </div>
    </>
  )
};

export default App
