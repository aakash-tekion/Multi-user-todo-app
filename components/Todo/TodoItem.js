import React, { useState } from 'react'
import { View, Text } from 'react-native'
import todoStyles from '../../styles/Todo.styles.js'
import CheckBox from '../../atoms/CheckBox/CheckBox.js'
import { useDispatch, useSelector } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { updateTodo } from '../../actions/todoActionHandler.js'
import IIcon from '../../assets/Icons/IIcon.js'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TagsContainer from '../../molecules/TagsContainer/TagsContainer'
import DescriptionModal from '../Modal/DescriptionModal.js'
import { getDMYFormat } from '../Helper/helperFunctions.js'
function TodoItem({ data, showCheckBox }) {
  const dispatch = useDispatch()
  const [modalOpen,setModalOpen] = useState(false)
  const [description,setDescription] = useState('')
  const state = useSelector(state=>state.appData)
  const checkBoxHandler = () => {
    dispatch(updateTodo(data.todoId, data.status))
  }
  const openModal = () => {
    setModalOpen(true)
    setDescription(data.description)
  }
  const closeModal = () => {
    setModalOpen(false)
    setDescription('')
  }
  let dateToDisplay = getDMYFormat(data.date)
  return (
    <View style={[todoStyles.todoItem,data.status?todoStyles.completedTodo:todoStyles.unCompletedTodo]}>
      <View style={todoStyles.innerGrid}>
        <DescriptionModal visible={modalOpen} closeModalHandler={closeModal} description={description} />
        <View style={todoStyles.todoItemContainer}>
          <Text numberOfLines={1} style={todoStyles.todoTitle} >
            {data.title}
          </Text>
          <View style={todoStyles.todoDescriptionContainer}>
            <Text  numberOfLines={2} style={todoStyles.todoDescriptionText}>{data.description}</Text>
            <TouchableOpacity style={todoStyles.iIconContainer} onPress={openModal}>
              <IIcon />
            </TouchableOpacity>
          </View>
          {(state.currentUser!=='' && data.assignedBy && data.assignedBy !== state.users[state.currentUser].username) ?<Text style={todoStyles.assignedText}>Assigned by {data.assignedBy}</Text>:<></>}
          {(state.currentUser!=='' && data.assignedTo && data.assignedTo !== state.users[state.currentUser].username)?<Text style={todoStyles.assignedText}>Assigned to {data.assignedTo}</Text>:<></>}
          {dateToDisplay && <Text style={todoStyles.date}>Date : {dateToDisplay} </Text>}
          <TagsContainer tags={data.tags} />
        </View>
        <View style={todoStyles.checkBoxContainer}>
          {showCheckBox?<CheckBox handler={checkBoxHandler} value={data.status} />:<></>}
        </View>
      </View>
    </View>
  )
}
export default withNavigation(TodoItem)
