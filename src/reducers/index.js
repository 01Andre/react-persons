import { combineReducers } from 'redux';
import UserReducer from './reducer_users';
import reducer_activeUser from './reducer_activeUser'

const rootReducer = combineReducers({
  users : UserReducer,
  activeUser : reducer_activeUser
});

export default rootReducer;
