import AuthReducer from "./authReducer";
import carReducer from "./carReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({ carReducer, AuthReducer });


export default rootReducer