import { createStore } from "redux";
import { combineReducers } from "redux";
import diaries from '../modules/diaries';

const rootReducer = combineReducers({
  diaries: diaries,
}); 
const store = createStore(rootReducer);

export default store; 