import React from 'react'
import { Text, View } from 'react-native'
import labelStyles from './Label.styles.js'
export default function Label({ label, required }) {
  return (
    <View style={labelStyles.label}>
      <Text style={labelStyles.labelText}>
        {label}
      </Text>
      <Text style={labelStyles.labelText}>
        {required ? ' *' : ''}
      </Text>

    </View>

  )
}
