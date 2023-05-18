import React, { useEffect, useState,useCallback } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import TodoPriorityTab from './TodoPriorityTab.js'
import Button from '../../atoms/OrgButton/Button.js'
import todoStyles from '../../styles/Todo.styles.js'
import globalStyles from '../../styles/index.styles.js'
import { applyFiltersToTodos } from '../Helper/todoFunctions.js'
export default function TodoContainer({ type, navigation }) {
  let [tasks,setTasks] = useState([])
  const state = useSelector(state=>state.appData)
  useEffect(() => {
    if (state.currentUser !== '') {
      let todos = state.users[state.currentUser].todos
      console.log('todoContainer',todos,state.filters)
      let temp = []
      if (type === 'all') {
        temp = [...Object.values(todos.uncompleted), ...Object.values(todos.completed)]
      }
      else if (type === 'completed') {
        temp = Object.values(todos.completed)
      }
      else if (type === 'uncompleted') {
        temp = Object.values(todos.uncompleted)
      }
      temp = applyFiltersToTodos(temp,state.filters)
      setTasks(temp)
    }
  }, [state])
  addButtonHandler = useCallback(() => {
    navigation.navigate('Form', {
      editTodoForm: false,
      currentUser:state.users[state.currentUser].username
    })
  },[])

  return (
    <View style={todoStyles.todoContainer}>
      <TodoPriorityTab tasks={tasks} />
      <View style={[globalStyles.width100, todoStyles.addButtonContainer, globalStyles.justifyContentCenter, globalStyles.alignContentCenter]}>
        <Button text='Add Todo' customStyle={{ height: '80%' }} handler={addButtonHandler} />
      </View>
    </View>

  )
}
