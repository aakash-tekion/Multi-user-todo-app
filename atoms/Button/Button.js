import React from 'react'
import { TouchableOpacity,Text, View} from 'react-native'
import buttonStyles from './Button.styles.js'
import { actionTypes } from "ServiceApp/components/FormBuilder/FormBuilder"
export default function Button(props) {
  const { id, onAction,text,customStyle} = props
  const pressHandler = () => {
    onAction({
      type:actionTypes.ON_SUBMIT
    })
  }
  return (
    <View style={buttonStyles.container}>
      <TouchableOpacity onPress={pressHandler} style={[buttonStyles.button,customStyle]}>
        <Text style={buttonStyles.buttonText}>{text}</Text>
      </TouchableOpacity>

    </View>
    
  )
}
