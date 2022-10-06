import { getInitialData, saveQuestionAnswer } from "../Utils/api";
import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { setAuthedUser } from "./authUser";
import { showLoading, hideLoading } from 'react-redux-loading-bar'


export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function handleInitialData(authedUser) {

    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(setAuthedUser(authedUser))
                dispatch(hideLoading())
            })
    }
}

export function addQuestionVote(id, vote, authedUser) {
    return {
        type: SAVE_QUESTION_ANSWER,
        id,
        vote,
        authedUser
    }
}

export function handleSaveQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())
        return saveQuestionAnswer({ authedUser, qid, answer })
            .then(
                dispatch(addQuestionVote(qid, answer, authedUser))
            )
            .then(
                () => dispatch(hideLoading())
            )
    }
}
