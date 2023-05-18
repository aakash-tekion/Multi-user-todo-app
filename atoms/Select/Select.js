import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import DropDownIcon from '../../assets/Icons/DropDownIcon.js'
import { pickerSelectStyles, selectStyles } from './Select.styles.js'
import { actionTypes } from "ServiceApp/components/FormBuilder/FormBuilder"
import { View } from 'react-native'
import Error from '../ErrorMessage/Error.js'
import Label from '../Label/Label.js'
export default function Select(props) {
    const { id, onAction, label, value, optionList, error, required } = props

    const handleSelectChange = (value) => {
        onAction({
            type: actionTypes.ON_FIELD_CHANGE,
            payload: {
                value: value,
                id: id
            }
        })
    }
    return (
        <View style={selectStyles.container}>
            <Label label={label} required={required} />
            <RNPickerSelect
                onValueChange={(value) => handleSelectChange(value)}
                items={optionList}
                placeholder={{
                    label: label
                }}
                style={pickerSelectStyles}
                value={value}
                Icon={() => {
                    return <DropDownIcon size={24} color='#555' />
                }}
            />
            <View style={selectStyles.errorMessageContainer}>
                <Error error={error} />
            </View>



        </View>

    )
}
