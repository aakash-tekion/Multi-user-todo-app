import React ,{ useState } from 'react'
import { View,Text, TouchableOpacity,Image } from 'react-native'
import dateStyles from './DateAndTimePicker.styles'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getDMYFormat } from '../../components/Helper/helperFunctions.js'
export default function DateAndTimePicker(props) {
    const { label,handler } = props
    const [visibility,setVisibility] = useState(false)
    const [labelToShow,setLabelToShow] = useState(label)
    const showDatePicker = () => {
        setVisibility(true)
    }
    const hideDatePicker = () => {
        setVisibility(false)
    }
    const closeHandler = () => {
        setLabelToShow(label)
        hideDatePicker()
    }
    const confirmHandler = (date) => {
        handler(date)
        let dateToDisplay = getDMYFormat(date)
        setLabelToShow(dateToDisplay)
        hideDatePicker()
    }
  return (
    <View style={dateStyles.dataPickerContainer}>
        <TouchableOpacity style={dateStyles.label} onPress={showDatePicker}>
            <Text>{ labelToShow }</Text>
            <Image source={require('../../assets/Images/calendar.png')} width={20} height={20}/>
        </TouchableOpacity>
        <DateTimePickerModal 
            isVisible={visibility}
            onCancel={closeHandler}
            onConfirm={confirmHandler}
            mode='date'
        />
    </View>
  )
}
