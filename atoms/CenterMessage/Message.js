import React from 'react'
import { View,Text } from 'react-native'
import messageStyles from './Message.styles.js'
export default function Message({message}) {
  return (
    <View style={messageStyles.MessageContainer}>
        <Text style={messageStyles.MessageText}>{message}</Text>
    </View>
  )
}
