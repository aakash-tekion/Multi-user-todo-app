import React from 'react'
import { Text, View } from 'react-native'
import globalStyles from '../styles/index.styles.js'
export default function CustomHeader({ title }) {
    return (
        <View>
            <Text style={[globalStyles.fontSize18,globalStyles.fontWeightBold]}>{title}</Text>
        </View>
    )
}
