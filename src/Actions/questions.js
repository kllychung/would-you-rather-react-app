import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { saveQuestion } from "../Utils/api"

export const ADD_QUESTION = 'ADD_QUESTION'
export const GET_QUESTION = 'GET_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser,
        }).then((question) => {
            dispatch(addQuestion(question))
        }).then(
            () => dispatch(hideLoading())
        )
    }
}

export function getQuestions(questions) {
    return {
        type: GET_QUESTION,
        questions
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
