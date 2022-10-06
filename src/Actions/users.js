export const GET_USER = 'GET_USER'

export function getUsers(users){
    return{
        type: GET_USER,
        users
    }
}