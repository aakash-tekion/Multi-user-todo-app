import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    flex1:{
        flex: 1 
    },
    formContainer:{
        flex:1,
        justifyContent:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    redBorder:{
        borderColor:'#DF2E38'
    },
    blueBorder:{
        borderColor:'#1c6ced'
    },
    height100Percent:{
        height:'100%'
    },
    flexRow:{
        flexDirection:'row'
    },
    justifyContentSpaceAround:{
        justifyContent:'space-around'
    },
    justifyContentSpaceBetween:{
        justifyContent:'space-between'
    },
    alignContentCenter:{
        alignItems:'center'
    },
    justifyContentCenter:{
        justifyContent:'center'
    },
    width100:{
        width:'100%'
    },
    width90:{
        width:'90%'
    },
    fontWeightBold:{
        fontWeight:'bold'
    },
    fontSize16:{
        fontSize:16
    },
    fontSize18:{
        fontSize:18
    },
    marginTop10:{
        marginTop:10
    },
    marginBottom20:{
        marginBottom:20
    },
    marginBottom5:{
        marginBottom:5
    },
    height60:{
        height:60
    },
    height10Percent:{
        height:'10%'
    },
    padding10:{
        padding:10
    },
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    errorMessage:{
        color:'red' 
    }
})
export default styles
