import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { NavigationContainer } from 'react-navigation'
import TodoContainer from '../components/Todo/TodoContainer'
const AllTodoContainer = ({navigation}) => {
    return <TodoContainer  navigation={navigation} type='all'/>
}
const CompletedTodoContainer = ({navigation}) => {
    return <TodoContainer type='completed' navigation={navigation}/>
}
const UncompletedTodoContainer = ({navigation}) => {
    return <TodoContainer type='uncompleted' navigation={navigation}/>
}
const BottomNavigator = createBottomTabNavigator({
    AllTodos:{
        screen:AllTodoContainer
    },
    Completed:{
        screen:CompletedTodoContainer
    },
    Uncompleted:{
        screen:UncompletedTodoContainer
    }
},{
    tabBarOptions:{
        activeTintColor:'#9384D1',
        labelStyle:{
            fontSize: 14,
            fontWeight: 'bold',
        }

    }
})

export default BottomNavigator