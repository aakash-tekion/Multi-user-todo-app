import TextInputField from 'ServiceApp/components/FormBuilder/fieldRenderers/TextInputField/TextInputField.js'
import { isRequiredRule,isEmailRule } from 'tbase/utils/formValidators';
import formStyles from '../../../styles/Form.styles'
import Input from '../../../molecules/Input/Input';
export const LOGIN_FORM_FIELD_IDS = {
    EMAIL:"EMAIL",
    PASSWORD:"PASSWORD"
}

const EMAIL = {
    id:LOGIN_FORM_FIELD_IDS.EMAIL,
    renderer:TextInputField,
    renderOptions:{
        required:true,
        label:__('Email'),
        placeholder:__('email address'),
        validators:[isRequiredRule,isEmailRule],
        container:formStyles.textInput,
    }
}
const PASSWORD = {
    id:LOGIN_FORM_FIELD_IDS.PASSWORD,
    renderer:Input,
    renderOptions: {
        required: true,
        label: __('Password'),
        secureTextEntry:true,
        placeholder: __('Password'),
        container:formStyles.textInput,
        validators:[isRequiredRule]
        
    }
}
export const LOGIN_FORM_FIELDS = {
    [LOGIN_FORM_FIELD_IDS.EMAIL]:EMAIL,
    [LOGIN_FORM_FIELD_IDS.PASSWORD]:PASSWORD
}
export const LOGIN_FORM_SECTIONS = () => [
    {
        rows:[
            {
                columns:[LOGIN_FORM_FIELD_IDS.EMAIL]
            },
            {
                columns:[LOGIN_FORM_FIELD_IDS.PASSWORD]
            }
        ]
    }
]
