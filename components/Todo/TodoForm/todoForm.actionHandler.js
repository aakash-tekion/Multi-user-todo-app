import { actionTypes } from "ServiceApp/components/FormBuilder/FormBuilder"
import { addTodo,editTodo } from "../../../actions/todoActionHandler.js"
import { TODO_FORM_FIELD_IDS } from "./todoForm.config.js"
import { handleValidation,handleFieldChange } from "../../Helper/formHanlders.js"
const handleInit = ({ payload }, { setState, getState }) => {
    const { navigation } = getState()
    let editTodoFormFlag = navigation.getParam('editTodoForm')
    if(editTodoFormFlag){
        let todoObj = navigation.getParam('todoObj')
        setState({
            values: {
                [TODO_FORM_FIELD_IDS.TITLE]: todoObj.title,
                [TODO_FORM_FIELD_IDS.DESCRIPTION]: todoObj.description,
                [TODO_FORM_FIELD_IDS.PRIORITY]: todoObj.priority,
                [TODO_FORM_FIELD_IDS.TAGS]: todoObj.tags[0],
                [TODO_FORM_FIELD_IDS.ASSIGN_TO]: todoObj.assignedTo
            }
        })
    }
}
const handleSubmit = ({ payload }, { setState, getState, dispatch }) => {
    const { navigation } = getState()
    let editForm = navigation.getParam('editTodoForm')
    let currentTodoObj = getState().values
    let todoToAdd = {
        'title': currentTodoObj.TITLE,
        'description': currentTodoObj.DESCRIPTION,
        'tags': [currentTodoObj.TAGS],
        'status': 0,
        'priority': currentTodoObj.PRIORITY,
        'assignedTo': currentTodoObj.ASSIGN_TO,
    }
    if (editForm) {
        let todoObj = navigation.getParam('todoObj')
        todoToAdd.todoId = todoObj.todoId
        todoToAdd.status = todoObj.status
        todoToAdd['assignedBy'] = todoObj.assignedBy
        dispatch(editTodo(todoToAdd))
    }
    else {
        let assignedBy = navigation.getParam('currentUser')
        todoToAdd['assignedBy'] = assignedBy
        dispatch(addTodo(todoToAdd))
    }
    navigation.navigate('Home')
};
export const todoFormActionHandlers = {
    [actionTypes.ON_FIELD_CHANGE]: handleFieldChange,
    [actionTypes.VALIDATION_SUCCESS]: handleValidation,
    [actionTypes.ON_FORM_SUBMIT]: handleSubmit,
    [actionTypes.ON_FORM_INIT]: handleInit
}