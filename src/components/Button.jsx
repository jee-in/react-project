import React from 'react';
// 1. 버튼 컴포넌트 생성
function Button({ className, onClick, isFormValid, children }) {
  return (
    <button 
      className={className} 
      onClick={onClick}
      disabled={isFormValid}
    >
      {children}
    </button>
  );
}
// 외부 모듈(파일)에서 이 컴포넌트를 사용할 수 있게 export해줘야 한다.
export default Button;

