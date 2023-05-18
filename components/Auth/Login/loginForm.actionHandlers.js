import { actionTypes } from "ServiceApp/components/FormBuilder/FormBuilder"
import { logIn } from "../../../actions/authActionHandler"
import { handleFieldChange,handleValidation } from "../../Helper/formHanlders.js"
import { LOGIN_FORM_FIELD_IDS } from "./loginForm.config"
export const handleFormSubmit = ({ payload }, { getState, setState,dispatch}) => {
    const { values } = getState()
    dispatch(logIn({
        'email':values[LOGIN_FORM_FIELD_IDS.EMAIL],
        'password':values[LOGIN_FORM_FIELD_IDS.PASSWORD]
    }))
    setState({
        values:{},
        errors:{}
    })
    
}
export const loginActionHandlers = {
    [actionTypes.ON_FIELD_CHANGE]: handleFieldChange,
    [actionTypes.VALIDATION_SUCCESS]: handleValidation,
    [actionTypes.ON_FORM_SUBMIT]: handleFormSubmit

}