import TextInputField from 'ServiceApp/components/FormBuilder/fieldRenderers/TextInputField/TextInputField.js'
// import MobileNumberField from "ServiceApp/components/FormBuilder/fieldRenderers/MobileNumberField";
import formStyles from '../../styles/Form.styles' 
import { isNumber } from './rules/rules.js'
export const EDIT_PROFILE_FORM_FIELD_IDS = {
    FIRST_NAME:'firstName',
    LAST_NAME:'lastName',
    CONTACT_NUMBER:"contactNumber",
    DISPLAY_NAME:'displayName',
}
const FIRST_NAME = {
    id:[EDIT_PROFILE_FORM_FIELD_IDS.FIRST_NAME],
    renderer:TextInputField,
    renderOptions:{
        label:__('First Name'),
        placeholder:__('First name'),
        container:formStyles.textInput,
    }
}
const LAST_NAME = {
    id:[EDIT_PROFILE_FORM_FIELD_IDS.LAST_NAME],
    renderer:TextInputField,
    renderOptions:{
        label:__('Last Name'),
        placeholder:__('Last name'),
        container:formStyles.textInput,
    }
}
const CONTACT_NUMBER = {
    id:[EDIT_PROFILE_FORM_FIELD_IDS.CONTACT_NUMBER],
    renderer:TextInputField,
    renderOptions:{
        label:__('Contact Number'),
        placeholder:__('Contact Number'),
        validators:[isNumber],
        container:formStyles.textInput,
    }
}
const DISPLAY_NAME = {
    id:[EDIT_PROFILE_FORM_FIELD_IDS.DISPLAY_NAME],
    renderer:TextInputField,
    renderOptions:{
        label:__('Display Name'),
        placeholder:__('Display name'),
        container:formStyles.textInput,
    }
}
export const EDIT_PROFILE_FORM_FIELDS = {
    [EDIT_PROFILE_FORM_FIELD_IDS.FIRST_NAME]:FIRST_NAME,
    [EDIT_PROFILE_FORM_FIELD_IDS.LAST_NAME]:LAST_NAME,
    [EDIT_PROFILE_FORM_FIELD_IDS.CONTACT_NUMBER]:CONTACT_NUMBER,
    [EDIT_PROFILE_FORM_FIELD_IDS.DISPLAY_NAME]:DISPLAY_NAME,
}
export const EDIT_PROFILE_FORM_SECTIONS = () => [
    {
        rows:[
            {
                columns:[EDIT_PROFILE_FORM_FIELD_IDS.FIRST_NAME,EDIT_PROFILE_FORM_FIELD_IDS.LAST_NAME]
            },
            {
                columns:[EDIT_PROFILE_FORM_FIELD_IDS.DISPLAY_NAME]
            },
            {
                columns:[EDIT_PROFILE_FORM_FIELD_IDS.CONTACT_NUMBER]
            }
        ]
    }
]