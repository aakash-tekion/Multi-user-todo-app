import React from 'react'
import { View ,Text} from 'react-native'
import FormWithSubmission from '../../../app/TekionGlobalComponents/FormWithSubmission/FormWithSubmission.js'
import globalStyles from '../../styles/index.styles.js'
import { triggerSubmit } from 'ServiceApp/components/FormWithSubmission/formEvents.js'
import Button from '../../atoms/OrgButton/Button.js'
import formStyles from '../../styles/Form.styles.js'
const Form = (props) => {
    const { values, errors, onAction, formSections, formFields, contextId, buttonTitle, authErrorMessage } = props
    const handleSubmit = () => {
        triggerSubmit(contextId)
    }
    return (
        <View>
            <FormWithSubmission
                sections={formSections()}
                fields={formFields}
                values={values}
                errors={errors}
                onAction={onAction}
                contextId={contextId}
            />
            {authErrorMessage ? (
                <View style={globalStyles.alignContentCenter}>
                    <Text style={formStyles.errorMessage}>{authErrorMessage}</Text>
                </View>) : <></>}
            <View style={globalStyles.alignContentCenter}>
                <Button text={buttonTitle} handler={handleSubmit} />
            </View>

        </View>
    )
}
Form.defaultProps = {
    values: {},
    errors: {}
}

export default Form
