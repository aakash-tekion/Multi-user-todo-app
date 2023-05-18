import React,{ useState } from 'react'
import { View,Text,TouchableOpacity} from 'react-native'
import CheckBox from '../CheckBox/CheckBox'
import checkboxStyles from './CheckBoxWithText.styles'
export default function CheckBoxWithText(props) {
    const { item,handler } = props
    const [isChecked,setIsChecked] = useState(false)
    const checkBoxHandler = () => {
        handler(item.value,isChecked)
        setIsChecked(prevBoolValue=>{
            return !prevBoolValue
        })
    }
  return (
    <TouchableOpacity style={checkboxStyles.container} onPress={checkBoxHandler}>
        <Text>{item.label}</Text>
        <CheckBox value={isChecked} />
    </TouchableOpacity>
    
  )
}
