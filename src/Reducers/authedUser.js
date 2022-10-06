import {SET_AUTHED_USER} from '../Actions/authUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.user_id
    default :
      return state;
  }
}