import React,{ useEffect, useState} from 'react'
import { View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { useSelector } from 'react-redux'
import TodoItem from '../Todo/TodoItem.js'
import todoStyles from '../../styles/Todo.styles.js'
import globalStyles from '../../styles/index.styles.js'
import Message from '../../atoms/CenterMessage/Message.js'
export default function Archive() {
    const state = useSelector(state => state.appData)
    let [archivedTodos,setArchivedTodos] = useState([])
    useEffect(() => {
        if(state.currentUser !== ''){
            setArchivedTodos(Object.values(state.users[state.currentUser].todos.archived))
        }
        
    }, [state])
    let renderContent = (archivedTodos.length > 0) ? (<View style={globalStyles.flex1}>
        <SwipeListView
            data={archivedTodos}
            renderItem={({ item }) => {
                return <TodoItem data={item} />
            }}
            contentContainerStyle={todoStyles.todoList}
        />
    </View>) : <Message message={'No archived Todos'} />
    return (
        <View style={{ flex: 1 }}>
            {renderContent}
        </View>
    )
}
