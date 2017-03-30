import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';


const rootReducer = combineReducers({
  loginState: LoginReducer
});

export default rootReducer;
