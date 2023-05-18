import { StyleSheet } from 'react-native'
import globalStyles from './index.styles'
const styles = StyleSheet.create({
    todoContainer: {
        flex: 1,
        width: '100%'
    },
    todoItemContainer: {
        width:'85%',
        paddingHorizontal:10,  
        paddingLeft:10
    },
    date:{
        paddingBottom:10
    },
    innerGrid:{   
        ...globalStyles.flexRow, 
        ...globalStyles.height100Percent, 
        ...globalStyles.alignContentCenter,

    },
    completedTodo:{
        backgroundColor:'#9cf7aa'
    },
    unCompletedTodo:{
        backgroundColor:'#F1F6F9'
    },
    todoDescriptionContainer:{
        width:'85%',
        ...globalStyles.flexRow,
        alignItems: 'center',
        paddingVertical:10,
        
    },
    todoDescriptionText:{
        marginRight:5,
        lineHeight: 20,
        
    },
    checkBoxContainer:{
        width:'15%',
        ...globalStyles.justifyContentCenter,
        ...globalStyles.alignContentCenter
    },
    todoList: {
        flex: 1,
        width: '100%',
        alignItems: 'center',

    },
    filterIcon: {
        width: '10%',
        color: '#fff',
        backgroundColor: '#9384D1',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        height:'100%'
    },

    addButtonContainer: {
        marginVertical: 10,
        height: '10%'
    },
    optionsIcon: {
        width: '15%'
    },
    iIconContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    optionsBar: {
        flexDirection: 'row',
        width: 375,
        height:200,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#9384D1',
        borderRadius: 10,
        marginVertical: 20
    },
    checkBox: {
        width: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionsTag: {
        borderWidth: 1.5,
        borderRadius: 20,
        width: '20%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginRight: 10

    },
    assignedText:{
        paddingBottom:10
    },
    todoItem: {
        width: 375,
        height:200,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        backgroundColor: '#fff',
       
    },
    
    todoTitle: {
        fontSize: 16,
        width: '100%',
        paddingTop:10,
        
    },

})

export default styles;
