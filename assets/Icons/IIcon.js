import React from 'react'
import { Image } from 'react-native'
import iconStyles from '../../styles/Icon.styles.js'
export default function IIcon() {
  return (
    <Image style={iconStyles.infoIcon} source={require('../Images/iicon.png')} />
  )
}
