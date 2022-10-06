export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(user_id) {
    return {
        type: SET_AUTHED_USER,
        user_id
    }
}

export function handleSetAuthedUser(user_id) {
    return (dispatch) => {
        return dispatch(setAuthedUser(user_id))
    }
}