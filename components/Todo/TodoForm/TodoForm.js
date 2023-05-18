import React from 'react'
import Form from '../../HOC/Form.js'
import { TODO_FORM_FIELDS, TODO_FORM_SECTIONS,TODO_FORM_FIELD_IDS} from './todoForm.config.js'
import withActionHandlers from 'ServiceApp/components/withActionHandlers.js'
import { todoFormActionHandlers } from './todoForm.actionHandler.js'
import globalStyles from '../../../styles/index.styles.js'
import { useSelector } from 'react-redux'
import { View } from 'react-native'
import { getUsersMapExcludingCurrentUser } from '../../Helper/helperFunctions.js'
function TodoForm(props) {
  const BUTTON_TITLE = 'Submit'
  const CONTEXT_ID = 'TODO_FORM'
  const users = useSelector(state=>state.appData.users)
  const currentUser = useSelector(state=>state.appData.currentUser)
  const userOptions = getUsersMapExcludingCurrentUser(users,currentUser)
  TODO_FORM_FIELDS[TODO_FORM_FIELD_IDS.ASSIGN_TO].renderOptions['optionList'] = userOptions

  return (
    <View style={globalStyles.container}>
      <Form
        {...props} 
        formSections={TODO_FORM_SECTIONS}
        formFields={TODO_FORM_FIELDS}
        buttonTitle={BUTTON_TITLE}
        contextId={CONTEXT_ID} 
      />
    </View>
  )
}
export default withActionHandlers(todoFormActionHandlers)(TodoForm)
