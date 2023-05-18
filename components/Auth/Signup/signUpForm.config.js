import TextInputField from 'ServiceApp/components/FormBuilder/fieldRenderers/TextInputField/TextInputField.js'
import { passwordRule } from '../rules/rules'
import { isRequiredRule,isEmailRule } from 'tbase/utils/formValidators';
import formStyles from '../../../styles/Form.styles'
import Input from '../../../molecules/Input/Input';8
export const SIGNUP_FORM_FIELD_IDS = {
    USERNAME:"username",
    EMAIL:"email",
    PASSWORD:"password",
    FIRST_NAME:'firstName',
    LAST_NAME:'lastName'
}
const USERNAME = {
    id:SIGNUP_FORM_FIELD_IDS.USERNAME,
    renderer:TextInputField,
    renderOptions: {
        required: true,
        label: __('Username'),
        placeholder: __('Username'),
        validators:[isRequiredRule],
        container:formStyles.textInput
    }
}
const FIRST_NAME = {
    id:SIGNUP_FORM_FIELD_IDS.FIRST_NAME,
    renderer:TextInputField,
    renderOptions: {
        required: true,
        label: __('Firstname'),
        placeholder: __('Firstname'),
        validators:[isRequiredRule],
        container:formStyles.textInput
    }
}
const LAST_NAME = {
    id:SIGNUP_FORM_FIELD_IDS.LAST_NAME,
    renderer:TextInputField,
    renderOptions: {
        required: true,
        label: __('Lastname'),
        placeholder: __('Lastname'),
        validators:[isRequiredRule],
        container:formStyles.textInput
    }
}
const EMAIL = {
    id:SIGNUP_FORM_FIELD_IDS.EMAIL,
    renderer:TextInputField,
    renderOptions: {
        required: true,
        label: __('Email'),
        placeholder: __('email address'),
        validators:[isRequiredRule,isEmailRule],
        container:formStyles.textInput
    }
}
const PASSWORD = {
    id:SIGNUP_FORM_FIELD_IDS.PASSWORD,
    renderer:Input,
    renderOptions: {
        required: true,
        label: __('Password'),
        placeholder: __('Password'),
        secureTextEntry:true,
        validators:[isRequiredRule,passwordRule],
        container:formStyles.textInput    
    }
}
export const SIGNUP_FORM_FIELDS = {
    [SIGNUP_FORM_FIELD_IDS.USERNAME]:USERNAME,
    [SIGNUP_FORM_FIELD_IDS.EMAIL]:EMAIL,
    [SIGNUP_FORM_FIELD_IDS.PASSWORD]:PASSWORD,
    [SIGNUP_FORM_FIELD_IDS.FIRST_NAME]:FIRST_NAME,
    [SIGNUP_FORM_FIELD_IDS.LAST_NAME]:LAST_NAME

}
export const SIGNUP_FORM_SECTIONS = () => [
    {
        rows:[
            {
                columns:[SIGNUP_FORM_FIELD_IDS.FIRST_NAME]
            },
            {
                columns:[SIGNUP_FORM_FIELD_IDS.LAST_NAME]
            },
            {
                columns:[SIGNUP_FORM_FIELD_IDS.USERNAME]
            },
            {
                columns:[SIGNUP_FORM_FIELD_IDS.EMAIL]
            },
            {
                columns:[SIGNUP_FORM_FIELD_IDS.PASSWORD]
            }
        ]
    }
]