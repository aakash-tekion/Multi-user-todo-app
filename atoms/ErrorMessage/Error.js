import React from 'react'
import { Text } from 'react-native'
import errorStyles from './Error.styles.js'
export default function Error({error}) {
  return (
    <Text style={errorStyles.errorMessage}>{error}</Text>
  )
}
