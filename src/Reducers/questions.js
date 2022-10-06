import { GET_QUESTION, ADD_QUESTION } from "../Actions/questions";
import { SAVE_QUESTION_ANSWER } from "../Actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTION:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.vote]: {
            ...state[action.id][action.vote],
            votes: state[action.id][action.vote].votes.concat(action.authedUser)
          }
        }
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      }
    default:
      return state;
  }
}