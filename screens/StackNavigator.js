import React from 'react'
import { createAppContainer } from 'react-navigation'
import {  createStackNavigator } from 'react-navigation-stack'
import Login from '../components/Auth/Login/Login.js'
import Signup from '../components/Auth/Signup/Signup.js'
import DrawerNavigator from './DrawerNavigator.js'
import TodoForm from '../components/Todo/TodoForm/TodoForm.js'
import CustomHeader from './CustomHeader.js'
import Menu from '../atoms/Menu/Menu.js'

const appStackNavigator = createStackNavigator({
    Login:{
        screen:Login,
        navigationOptions:{
            headerTitle:(props)=>(<CustomHeader {...props} title='Login'/>)
        }
    },
    Signup:{
        screen:Signup,
        navigationOptions:{
            headerTitle:(props)=>(<CustomHeader {...props} title='Sign Up'/>)
        }
    },
    Home:{
        screen:DrawerNavigator,
        navigationOptions:{
            headerTitle:(props)=>(<CustomHeader {...props} title='Todo App'/>),
            headerLeft:()=>{
                return <Menu/>
            }
        }
    },
    Form:{
        screen:TodoForm,
        navigationOptions:{
            headerTitle:(props)=>(<CustomHeader {...props} title='Todo App'/>),
    
        }
    }
},{
    defaultNavigationOptions:{
        headerBackTitleStyle:{
            color:'#9384D1',
            fontSize:18,
            fontWeight:'bold'
        },
        headerTintColor:'#9384D1',
        
    }
})
const AppContainer = createAppContainer(appStackNavigator)
export default AppContainer