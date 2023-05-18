import React from 'react'
import { TouchableOpacity } from 'react-native'
import MenuIcon from '../../assets/Icons/MenuIcon'
import menuStyles from './Menu.styles.js'
import { withNavigation } from 'react-navigation'
function Menu({ navigation }) {
    const toggleMenu = () => {
        navigation.toggleDrawer()
    }
  return (
    <TouchableOpacity style={menuStyles.menu} onPress={toggleMenu}>
        <MenuIcon size={24} color={'#9384D1'}/>
    </TouchableOpacity>
  )
}
export default withNavigation(Menu)