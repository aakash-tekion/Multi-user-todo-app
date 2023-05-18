import React from 'react'
import Form from '../../HOC/Form'
import formStyles from '../../../styles/Form.styles.js'
import globalStyles from '../../../styles/index.styles.js'
import withActionHandlers from 'ServiceApp/components/withActionHandlers.js'
import { signupActionHandlers } from './signUpForm.actionHandlers'
import { SIGNUP_FORM_FIELDS, SIGNUP_FORM_SECTIONS } from './signUpForm.config'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
function Signup(props) {
  const CONTEXT_ID = 'Sign_Up'
  const BUTTON_TITLE = 'Sign Up'
  const authErrorMessage = useSelector(state=>state.appData.authSignupErrorMessage)
  return (
    <View style={globalStyles.container}>
      <View style={[formStyles.form,formStyles.signUpForm]}>
        <Form
          {...props}
          contextId={CONTEXT_ID}
          buttonTitle={BUTTON_TITLE}
          formSections={SIGNUP_FORM_SECTIONS}
          formFields={SIGNUP_FORM_FIELDS}
          authErrorMessage={authErrorMessage}
        />
      </View>
    </View >
  )
}
export default withActionHandlers(signupActionHandlers)(Signup)
