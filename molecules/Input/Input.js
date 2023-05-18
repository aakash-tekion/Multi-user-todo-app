import React from 'react'
import { TextInput } from 'react-native'
import inputStyles from './Input.styles.js'
import { Text,View } from 'react-native'
import Label from '../../atoms/Label/Label.js'
import Error from '../../atoms/ErrorMessage/Error.js'
import { actionTypes } from "ServiceApp/components/FormBuilder/FormBuilder"

export default function Input(props) {
  const {onAction,id,placeholder,secureTextEntry,customStyle,setMultiLine,value,error,label,required} = props
  handleChange = (text) => {
    onAction({
      type:actionTypes.ON_FIELD_CHANGE,
      payload:{
        value:text,
        id:id
      }
    })
  }
  return (
    <View style={inputStyles.container}>
      <Label label={label} required={required}/>
      <TextInput 
      secureTextEntry={secureTextEntry}
      style={[inputStyles.input,customStyle]} 
      placeholderTextColor={'#999'}
      multiline={setMultiLine} 
      onChangeText={text => handleChange(text)} 
      value={value}
      placeholder={placeholder}
      />
      <View style={inputStyles.errorContainer}>
        <Error error={error}/>
      </View>
      
   

    </View>
  )
}
