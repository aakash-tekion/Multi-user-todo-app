import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import TodoItem from './TodoItem'
import todoStyles from '../../styles/Todo.styles.js'
import globalStyles from '../../styles/index.styles.js'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../actions/todoActionHandler'
import EditIcon from '../../assets/Icons/EditIcon.js'
import { withNavigation } from 'react-navigation'
import Message from '../../atoms/CenterMessage/Message'
import DeleteBinSvg from 'ServiceApp/assets/svg/DeleteBinSvg'
function Tab({ totalTasks, navigation, priority }) {
    let tasks = []
    const dispatch = useDispatch()
    const deleteHandler = (todoId, status) => {
        dispatch(deleteTodo(todoId, status))
    }
    const editTodoHandler = (todoObj) => {
        navigation.navigate('Form', {
            editTodoForm: true,
            todoObj
        })
    }
    totalTasks.map(task => {
        if (task.priority === priority.toUpperCase()) {
            tasks.push(task)
        }
    })

    let renderContent = tasks.length > 0 ? (
        <SwipeListView
            data={tasks}
            renderItem={({ item }) => {
                return <TodoItem data={item} showCheckBox={true} />
            }}
            renderHiddenItem={({ item }) => {
                return (
                    <View style={todoStyles.optionsBar}>
                        <TouchableOpacity style={[todoStyles.optionsTag, globalStyles.blueBorder]} onPress={editTodoHandler.bind(this, item)} >
                            <EditIcon height={30} width={30} color={'#3178eb'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[todoStyles.optionsTag, globalStyles.redBorder]} onPress={deleteHandler.bind(this, item.todoId, item.status)}>
                            <DeleteBinSvg height={30} width={30} fill={'#DF2E38'} />
                        </TouchableOpacity>
                    </View>)
            }}
            rightOpenValue={-175}
            contentContainerStyle={todoStyles.todoList}
        />
    ) : (<Message message={`No ${priority} Priority Todos`} />)
    return renderContent

}
export default withNavigation(Tab)