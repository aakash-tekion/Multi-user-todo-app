import React from 'react'
import { TextInput } from 'react-native'
import inputStyles from './Input.styles.js'
export default function Input(props) {
  const {setHandler,id,placeholder,customStyle,setMultiLine,value,secureText} = props

  return (
    <TextInput 
    style={[inputStyles.input,customStyle]} 
    multiline={setMultiLine} 
    secureTextEntry = {secureText}
    onChangeText={text => setHandler(text)} 
    value={value}
    placeholder={placeholder}
    />
  )
}
