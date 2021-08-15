import { UserActionTypes } from './user.types'
// export const SET_CURRENT_USER = 'SET_CURRENT_USER'
// export const SET_USER_SUCCESS = 'SET_USER_SUCCESS'
// export const SET_USER_FAIL = 'SET_USER_FAIL'


export const setCurrentUser = user => {
 return {
   type: UserActionTypes.SET_CURRENT_USER,
   payload: user
 }
}
