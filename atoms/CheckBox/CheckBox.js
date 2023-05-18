import React from 'react'
import { TouchableOpacity,Text } from 'react-native'
import checkBoxStyles from './CheckBox.styles.js'
export default function CheckBox({handler,value}) {
  const EMPTY_OBJECT = {}
  return (
    <TouchableOpacity onPress={handler}>
        <Text style={[checkBoxStyles.box,value?checkBoxStyles.active:EMPTY_OBJECT]}>{" ✓"}</Text>
    </TouchableOpacity>
  )
}
