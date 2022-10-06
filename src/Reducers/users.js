import { GET_USER } from "../Actions/users";
import { SAVE_QUESTION_ANSWER } from "../Actions/shared";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state, ...action.users
      }
    case SAVE_QUESTION_ANSWER:
      return {
        ...state
        , [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.vote
          }
        }
      }
    default:
      return state
  }
}