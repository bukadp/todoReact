import {combineReducers, legacy_createStore as createStore} from "redux";
import todoReducer from "./reducerTodo";

let reducers = combineReducers({
    todo: todoReducer,

});

let store = createStore(reducers);

window.store = store;

export default store;
