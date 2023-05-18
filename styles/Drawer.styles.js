import { StyleSheet } from "react-native";
import globalStyles from './index.styles'
import { G } from "react-native-svg";
const styles = StyleSheet.create({
    drawerItems:{
      height:40,
      justifyContent:'center',
      alignItems:'center'
    },
    drawerItemsText:{
      fontSize:16
    },
    avatarContainer:{
      ...globalStyles.flex1,
      ...globalStyles.justifyContentCenter,
      ...globalStyles.alignContentCenter
    },
    cameraSvg:{
      position:'absolute',
      ...globalStyles.alignContentCenter,
      ...globalStyles.justifyContentCenter,
      bottom:25
    },
    active:{
      backgroundColor:'#F0F0F0'
    },
    textWithIconContainer:{
      paddingVertical:10,
      flexDirection:'row',
      width:'100%',
      height:'20%',
      alignItems:'center',
      justifyContent:'center'
    },
    headerContent:{
      ...globalStyles.alignContentCenter,
      ...globalStyles.justifyContentCenter
    },
    activeTextColor:{
      color:'#9384D1',
      fontWeight:'600'
    },
    avatarImage:{
        height:125,
        width:125,
        borderRadius:62
    },
    username:{
      flexDirection:'column',
        ...globalStyles.justifyContentCenter,
        ...globalStyles.alignContentCenter,
        fontSize:16,
        paddingRight:5
    },
    headerContainer:{
      height:'35%'
    },
    logOut:{
      flex:1,
      justifyContent:'flex-end',
      paddingBottom:50
    },
    logOutText:{
      marginLeft:5
    }
  });

export default styles