import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { saveQuestion } from "../Utils/api"
import { ADD_QUESTION, SAVE_QUESTION_ANSWER } from './shared'

export const GET_QUESTION = 'GET_QUESTION'

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

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
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
