import { actionTypes } from "ServiceApp/components/FormBuilder/FormBuilder"
import { SIGNUP_FORM_FIELD_IDS } from "./signUpForm.config"
import { signUp } from "../../../actions/authActionHandler"
import { handleFieldChange,handleValidation } from "../../Helper/formHanlders.js"
export const handleFormSubmit = ({ payload }, { getState, setState,dispatch }) => {
    const { values } = getState()
    dispatch(signUp({values}))
    setState({
        values:{},
        errors:{}
    })

}

export const signupActionHandlers = {
    [actionTypes.ON_FIELD_CHANGE]: handleFieldChange,
    [actionTypes.VALIDATION_SUCCESS]: handleValidation,
    [actionTypes.ON_FORM_SUBMIT]: handleFormSubmit

}