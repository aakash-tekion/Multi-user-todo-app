import { combineReducers } from "redux";
// import { authReducer } from "./authReducer";
import { todoReducer } from "./todoReducer";
const rootReducer =  combineReducers({
    appData:todoReducer
})
export default rootReducer