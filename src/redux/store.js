import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import TodoListReducer from "./TodoListReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

let reducers=combineReducers(
    {todolist: TodoListReducer},

);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(
//     applyMiddleware(thunk)
// ));
let store =createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;