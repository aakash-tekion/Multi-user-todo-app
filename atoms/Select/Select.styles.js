import { StyleSheet } from 'react-native'
export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
            width: 375,
            borderWidth: 1,
            height: 60,
            borderRadius: 4,
            borderColor:'#D4D5D6',
            paddingHorizontal:10,
            marginLeft:10

    },
})
export const selectStyles = StyleSheet.create({
    container:{
        width:'100%',
    },
    errorMessageContainer:{
        width:'80%',
        alignItems:'flex-start',
        marginLeft:10
    }
})
