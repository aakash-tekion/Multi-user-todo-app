import TextInputField from 'ServiceApp/components/FormBuilder/fieldRenderers/TextInputField/TextInputField.js'
import SelectField from 'ServiceApp/components/FormBuilder/fieldRenderers/SelectField/SelectField.js';
import { priorityOptions,tagsOptions ,userList} from '../../../constants/selectOptions.js'
import { isRequiredRule } from 'tbase/utils/formValidators';
import formStyles from '../../../styles/Form.styles.js'
import Select from '../../../atoms/Select/Select.js'
export const TODO_FORM_FIELD_IDS = {
    DESCRIPTION:'DESCRIPTION',
    TITLE:'TITLE',
    PRIORITY:'PRIORITY',
    TAGS:'TAGS',
    ASSIGN_TO:'ASSIGN_TO'
}
const TITLE = {
    id: TODO_FORM_FIELD_IDS.TITLE,
    renderer: TextInputField,
    renderOptions: {
        required: true,
        label: __('Title'),
        placeholder: __('Title'),
        validators:[isRequiredRule],
        container:formStyles.textInput
    }
}
const DESCRIPTION = {
    id: TODO_FORM_FIELD_IDS.DESCRIPTION,
    renderer: TextInputField,
    renderOptions: {
        required: true,
        label: __('Description'),
        placeholder: __('Description'),
        container:formStyles.textInput,
        validators:[isRequiredRule]
    }
}
const PRIORITY = {
    id: TODO_FORM_FIELD_IDS.PRIORITY,
    renderer: Select,
    renderOptions: {
        required: true,
        label: __('Priority'),
        validators:[isRequiredRule],
        optionList:priorityOptions,
        showMandatoryIndicator:true
    }
}
const TAGS = {
    id: TODO_FORM_FIELD_IDS.TAGS,
    renderer: Select,
    renderOptions: {
        label: __('Tags'),
        optionList:tagsOptions
    }
}
const ASSIGN_TO = {
    id: TODO_FORM_FIELD_IDS.ASSIGN_TO,
    renderer: Select,
    renderOptions: {
        label: __('Assign To'),
        className:formStyles.todoInput,
    }
}


export const TODO_FORM_FIELDS = {
    [TODO_FORM_FIELD_IDS.TITLE]:TITLE,
    [TODO_FORM_FIELD_IDS.DESCRIPTION]:DESCRIPTION,
    [TODO_FORM_FIELD_IDS.PRIORITY]:PRIORITY,
    [TODO_FORM_FIELD_IDS.TAGS]:TAGS,
    [TODO_FORM_FIELD_IDS.ASSIGN_TO]:ASSIGN_TO
}

export const TODO_FORM_SECTIONS = () => [
    {
        rows:[
            {
                columns:[TODO_FORM_FIELD_IDS.TITLE]
            },
            {
                columns:[TODO_FORM_FIELD_IDS.DESCRIPTION]
            },
            {
                columns:[TODO_FORM_FIELD_IDS.PRIORITY]
            },
            {
                columns:[TODO_FORM_FIELD_IDS.TAGS]
            },
            {
                columns:[TODO_FORM_FIELD_IDS.ASSIGN_TO]
            }
        ]
    }
]