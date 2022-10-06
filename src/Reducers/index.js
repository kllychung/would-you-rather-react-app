import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  questions,
  users,
  authedUser,
  loadingBar: loadingBarReducer
})