// Action Value
const ADD_NUMBER = "ADD_NUMBER";

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,          // key와 value가 같으면 이렇게 축약 형태로 코드를 쓸 수 있다.
  };
};

// Initial State
const initialState = {
  number: 0,
}

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        // state.number
        number: state.number + action.payload,
      }
    default:
      return state;
  }
};

// export default reducer
export default counter;