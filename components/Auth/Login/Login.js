import React, { useCallback, useEffect } from 'react'
import Form from '../../HOC/Form.js'
import { loginActionHandlers } from './loginForm.actionHandlers.js'
import { LOGIN_FORM_FIELDS, LOGIN_FORM_SECTIONS } from './loginForm.config.js'
import withActionHandlers from 'ServiceApp/components/withActionHandlers.js'
import { TouchableOpacity, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import formStyles from '../../../styles/Form.styles.js'
import globalStyles from '../../../styles/index.styles.js'
function Login(props) {
    const { navigation } = props
    const BUTTON_TITLE = 'Log In'
    const CONTEXT_ID = 'LOGIN_FORM'
    const navigateToSignUp = useCallback(() => {
        navigation.navigate('Signup')
    },[])
    const state = useSelector(state => state.appData)
    const authErrorMessage = state.authLoginErrorMessage
    useEffect(() => {
        if (state.currentUser !== '') {
            navigation.navigate('Home')
        }
    }, [state])
    return (
        <View style={globalStyles.container}>
            <View style={formStyles.form}>
                <Form
                    {...props}
                    formFields={LOGIN_FORM_FIELDS}
                    formSections={LOGIN_FORM_SECTIONS}
                    buttonTitle={BUTTON_TITLE}
                    contextId={CONTEXT_ID}
                    authErrorMessage={authErrorMessage}
                />      
                <TouchableOpacity style={formStyles.link} onPress={navigateToSignUp}>
                    <Text>Create a new account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default withActionHandlers(loginActionHandlers)(Login)


