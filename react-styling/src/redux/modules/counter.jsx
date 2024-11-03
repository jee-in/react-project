// Action Creator 만들기
// 액션 객체를 한곳에서 관리할 수 있도록 "함수"와 액션 value를 상수로 만들기
const PLUS_ONE = "PLUS_ONE"; // value는 상수로 생성
const MINUS_ONE = "MINUS_ONE";

// 액션 객체를 반환하는 함수 생성
// export가 붙는 이유는 plusOne()은 밖으로 나가서 사용될 예정이기 때문이다.
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  // 리듀서가 전달받은 action을 콘솔에 출력해보기
  //Dconsole.log(action);

  switch (action.type) {
    case PLUS_ONE:  // 문자열 대신 상수 넣기
      return {
        // 기존 state에 있던 number에 +1을 더한다.
        number: state.number + 1,
      }
    case MINUS_ONE: // 문자열 대신 상수 넣기
      return {
        number: state.number -1,
      }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;