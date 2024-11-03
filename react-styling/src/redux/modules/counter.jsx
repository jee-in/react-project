// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  // 리듀서가 전달받은 action을 콘솔에 출력해보기
  console.log(action);

  switch (action.type) {
    case "PLUS_ONE":
      return {
        // 기존 state에 있던 number에 +1을 더한다.
        number: state.number + 1,
      }
    case "MINUS_ONE":
      return {
        number: state.number -1,
      }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;