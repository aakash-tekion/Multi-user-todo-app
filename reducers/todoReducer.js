import { todoActionTypes } from "../actionTypeConstants/todoActionTypes"
import { authActionTypes } from "../actionTypeConstants/authActionTypes"
import { profileActionTypes } from "../actionTypeConstants/profileActionTypes"
const initialState = {
    currentUser:'',
    authLoginErrorMessage:'',
    authSignupErrorMessage:'',
    filters:{},
    users : {
        'gsaakash@tekion.com':{
            username:'Aakash',
            password:'Test@1234',
            profile:{
                firstName:'',
                lastName:'',
                displayName:'',
                contactNumber:''
            },
            todos:{
                completed:{
                    
                        '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d':{
                            title:'Task A',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            assignedBy:'kunj@tekion.com',
                            assignedTo:'',
                            status:1,
                            priority:'HIGH',
                            todoId:'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
                            tags:['shopping'],
                            date:'2023-06-10T02:22:37.000Z'
                        },
                        '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dca70':{
                            title:'Task B',
                            description:'Lorem ipsum dolor sit.',
                            assignedBy:'',
                            assignedTo:'',
                            status:1,
                            priority:'HIGH',
                            todoId:'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dca70',
                            tags:['health'],
                            date:'2023-06-10T02:22:37.000Z'
                        },
                        '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dc6o1':{
                            title:'Task C',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            assignedBy:'kunj@tekion.com',
                            assignedTo:'',
                            status:1,
                            priority:'MEDIUM',
                            todoId:'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dc6o1',
                            tags:['health'],
                            date:'2023-02-10T02:22:37.000Z'
                        }
                    

                },
                uncompleted:{
                    
                        'b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed':{
                            title:'TASK D',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            assignedBy:'kunj@tekion.com',
                            assignedTo:'',
                            status:0,
                            priority:"LOW",
                            todoId:'b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
                            tags:['education'],
                            date:'2023-06-10T02:22:37.000Z'
                        }
                    
                },
                'archived':{

                }
            }
        },
        'kunj@tekion.com':{
            username:'kunj',
            password:'Test@Kunj4',
            profile:{
                firstName:'',
                lastName:'',
                displayName:'',
                contactNumber:''
            },
            todos:{
                completed:{
                        '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6h':{
                            title:'Homework and Gym',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            assignedBy:'',
                            assignedTo:'',
                            status:1,
                            priority:'HIGH',
                            todoId:'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6h',
                            tags:['sports'],
                            date:'2023-06-10T02:22:37.000Z'
                        }
                },
                uncompleted:{
                    
                        'b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bfc':{
                            title:'Prepare for Exams',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            assignedBy:'',
                            assignedTo:'',
                            status:0,
                            priority:"LOW",
                            todoId:'b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bfc',
                            tags:['education'],
                            date:'2023-06-10T02:22:37.000Z'
                        }
                    
                },
                'archived':{

                }
            }
        }
    }
}
export const todoReducer = (state = initialState,action) =>{
    switch(action.type){
        case authActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                currentUser:action.userEmail,
                authSignupErrorMessage:'',
                authLoginErrorMessage:''
            }
        case authActionTypes.LOGIN_FAILURE:
            return{
                ...state,
                authLoginErrorMessage:action.errorMessage
            }
        case authActionTypes.LOG_OUT:
            return {
                ...action.newState
            }
        case authActionTypes.SIGNUP_SUCCESS:
            return {
                ...action.newState,
                authSignupErrorMessage:'',
                authLoginErrorMessage:''
            }
        case authActionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                authSignupErrorMessage:action.errorMessage
            }
        case todoActionTypes.ADD_TODO:
        case todoActionTypes.DELETE_TODO:
        case todoActionTypes.EDIT_TODO:
        case todoActionTypes.UPDATE_TODO:
        case todoActionTypes.APPLY_FILTER:
        case todoActionTypes.RESET_FILTER:
        case profileActionTypes.EDIT_PROFILE:
            return {
                ...action.newState
            }
        default:
            return state
    }
}