import { StyleSheet } from "react-native";
import globalStyles from './index.styles'
const styles = StyleSheet.create({
    form:{
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        borderRadius: 10,
        backgroundColor:'#fff',
        padding:15,
        justifyContent:'center'
    },
    logInForm:{
        height:'65%',
    },
    signUpForm:{
        height:'90%',
    },
    textInput:{
        height:60,

    },
    errorMessage:{
        color:'red',
        paddingVertical:10
    },
    link:{
        ...globalStyles.alignContentCenter,
        marginTop:20
    }
})
export default styles