import { EDIT_PROFILE_FORM_FIELD_IDS } from './editForm.config'
import { actionTypes } from "ServiceApp/components/FormBuilder/FormBuilder"
import { handleFieldChange, handleValidation } from "../Helper/formHanlders.js"
import { editProfile } from '../../actions/profileActionHandlers.js'
const handleSubmit = ({ payload }, { getState, setState, dispatch }) => {
    const { values, navigation } = getState()
    dispatch(editProfile(values))
    navigation.navigate('Home')
    setState({
        values:{},
        errors: {}
    })
}
const handleInit = ({ payload },{ getState,setState }) => {
    const { navigation } = getState()
    let profileInfo = navigation.getParam('profileInfo')
    if(profileInfo){
        setState({
            values:{...profileInfo}
        })
    }
}
export const editProfileActionHandlers = {
    [actionTypes.ON_FIELD_CHANGE]: handleFieldChange,
    [actionTypes.VALIDATION_SUCCESS]:handleValidation,
    [actionTypes.ON_FORM_SUBMIT]: handleSubmit,
    [actionTypes.ON_FORM_INIT]:handleInit
}