import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import BottomNavigator from './BottomNavigation'
import Sidebar from '../components/SideBar/Sidebar.js'
import Archive from '../components/Archived/Archive.js'
const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen:BottomNavigator
    },
    Archive:{
        screen:Archive
    }
},{
   contentComponent:Sidebar,
   overlayColor:'rgba(0,0,0,0.5)'
})
export default DrawerNavigator