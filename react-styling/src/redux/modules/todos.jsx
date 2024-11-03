// Action Value
const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
// const UPDATE_TODO = "UPDATE_TODO";

// Action Creator
export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return { 
    type: DELETE_TODO,
    payload,
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "첫 번째 메모",
    },
    {
      id: 2,
      title: "두 번째 메모",
    },
  ],
}

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

// export default reducer
export default todos;