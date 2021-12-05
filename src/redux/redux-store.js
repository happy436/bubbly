import { combineReducers, createStore } from "redux";
import messagesReducer from "../data/messagesReducer";
import profileReducer from "../data/profileReducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer, 
        messagesPage: messagesReducer,
    });

let store = createStore(reducers);

export default store;