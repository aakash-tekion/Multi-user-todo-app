import { authActionTypes } from "../actionTypeConstants/authActionTypes"
export const logIn = (user) => {
    return (dispatch,getState)=>{
        const state = getState()['appData']['users']
        if(user.email in state){
            if(user.password === state[user.email]['password']){
                return dispatch({
                    type:authActionTypes.LOGIN_SUCCESS,
                    userEmail:user.email
                })
            }
            else{
                return dispatch({
                    type:authActionTypes.LOGIN_FAILURE,
                    errorMessage:'Enter correct username and password'
                })
            }   
        }
        else{
            return dispatch({
                type:authActionTypes.LOGIN_FAILURE,
                errorMessage:'User not found'
            })
        }
    }
}
export const signUp = (user) => {
    return (dispatch,getState)=>{
        const state = getState()['appData']
        if(user.email in state.users){
            return(dispatch({
                type:authActionTypes.SIGNUP_FAILURE,
                errorMessage:'User already Exist'
            }))
        }
        else{
            state.currentUser=user.email
            state.users[user.email]={
                username:user.username,
                password:user.password,
                profile:{
                    displayName:'',
                    firstName:user.firstName,
                    lastName:user.lastName,
                    contactNumber:''
                },
                todos:{
                    archived:{},
                    completed:{},
                    uncompleted:{}
                }
            }
            return dispatch({
                type:authActionTypes.SIGNUP_SUCCESS,
                newState:state
            })
        }
    }
}
export const logOut = () => {
    return (dispatch,getState)=>{
        let state = getState()['appData']
        state.currentUser = ''
        state.authErrorMessage = ''
        state.filters = {}
        return dispatch({
            type:authActionTypes.LOG_OUT,
            newState:state
        })
    }
}