import React, { useState, useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import globalStyles from '../../styles/index.styles'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header.js'
import styles from '../../styles/Drawer.styles.js'
import { logOut } from '../../actions/authActionHandler.js'
import { LogoutSvg } from "ServiceApp/assets/svg";
function Sidebar(props) {
    const { navigation } = props
    const dispatch = useDispatch()
    const state = useSelector(state => state.appData)
    const username = state.currentUser !== '' ? state.users[state.currentUser].profile.displayName : ''
    const [activeScreen, setActiveScreen] = useState('Home')
    const EMPTY_OBJECT = {}
    const screenHandler = useCallback((screenName) => {
        setActiveScreen(screenName)
        navigation.navigate(screenName)
        navigation.closeDrawer()
    },[])
    const logOutHandler = useCallback(() => {
        dispatch(logOut())
        navigation.closeDrawer()
        setActiveScreen('Home')
        navigation.navigate('Login')
    },[])
    return (
        <View style={globalStyles.flex1}>
            <Header username={username} customStyle={styles.headerContainer} />
            <TouchableOpacity style={[styles.drawerItems, activeScreen === 'Home' ? styles.active : EMPTY_OBJECT]} onPress={screenHandler.bind(this, 'Home')}>
                <Text style={[styles.drawerItemsText, activeScreen === 'Home' ? styles.activeTextColor : EMPTY_OBJECT]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerItems, activeScreen === 'Archive' ? styles.active : EMPTY_OBJECT]} onPress={screenHandler.bind(this, 'Archive')}>
                <Text style={[styles.drawerItemsText, activeScreen === 'Archive' ? styles.activeTextColor : EMPTY_OBJECT]}>Archive</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerItems, styles.logOut, activeScreen === 'Logout' ? styles.active : EMPTY_OBJECT]} onPress={logOutHandler}>
                <View style={styles.textWithIconContainer}>
                    <LogoutSvg />
                    <Text style={[styles.logOutText,styles.drawerItemsText, activeScreen === 'Logout' ? styles.activeTextColor : EMPTY_OBJECT]}>log out</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Sidebar
