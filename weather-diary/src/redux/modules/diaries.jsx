// Action Value
const CREATE_DIARY = "CREATE_DIARY";
const DELETE_DIARY = "DELETE_DIARY";
const UPDATE_DIARY = "UPDATE_DIARY";

// Action Creator
export const createDiary = (payload) => {
  return {
    type: CREATE_DIARY,
    payload,
  };
};

export const deleteDiary = (payload) => {
  return { 
    type: DELETE_DIARY,
    payload,
  };
};

// Initial State
const initialState = {
  diaries: [
    {
      id: 1,
      title: "첫 번째 일기",
    },
    {
      id: 2,
      title: "두 번째 일기",
    },
  ],
}

// Reducer
const diaries = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DIARY:
      return {
        ...state,
        diaries: [...state.diaries, action.payload]
      };
    case DELETE_DIARY:
      return {
        ...state,
        diaries: state.diaries.filter((diary) => diary.id !== action.payload),
      };
    default:
      return state;
  }
}

// export default reducer
export default diaries;