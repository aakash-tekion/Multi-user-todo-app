import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    tagsWithClose: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        width: 125,
        marginLeft: 5,
        borderColor: '#9384D1',
        marginTop:10,
        paddingVertical:5,
        paddingHorizontal:5,
        borderRadius:10,
        backgroundColor:'#9384D1',
    },
    tagsWithoutClose:{
        alignSelf:'center',
        padding:5,
        borderWidth: 2,
        borderRadius:10,
        borderColor: '#9384D1',
        backgroundColor:'#9384D1',
        marginRight: 5
    },
    tagTitle: {
        fontSize:16,
        color:'#fff'
    }
})
export default styles