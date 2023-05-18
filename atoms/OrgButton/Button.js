import React from 'react'
import { TouchableOpacity,Text} from 'react-native'
import buttonStyles from './Button.styles.js'
export default function Button(props) {
  const { handler,text,customStyle} = props
  
  return (
    <TouchableOpacity onPress={handler} style={[buttonStyles.button,customStyle]}>
        <Text style={buttonStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
