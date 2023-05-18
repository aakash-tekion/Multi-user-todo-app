import React,{ Profiler, useEffect} from 'react'
import Form from '../HOC/Form.js'
import { View } from 'react-native'
import globalStyles from '../../styles/index.styles.js'
import withActionHandlers from 'ServiceApp/components/withActionHandlers.js'
import { EDIT_PROFILE_FORM_SECTIONS, EDIT_PROFILE_FORM_FIELDS } from './editForm.config.js'
import { editProfileActionHandlers } from './editForm.actionHandler.js'
import { useSelector } from 'react-redux'
function EditForm(props) {
    const CONTEXT_ID = 'EDIT_PROFILE_FORM'
    const BUTTON_TITLE ="EDIT PROFILE"
    return (
        <View style={globalStyles.formContainer}>
        <Form
            {...props}
            formSections={EDIT_PROFILE_FORM_SECTIONS}
            formFields={EDIT_PROFILE_FORM_FIELDS}
            buttonTitle={BUTTON_TITLE}
            contextId={CONTEXT_ID}
        />
        </View>
    )
}
export default withActionHandlers(editProfileActionHandlers)(EditForm)