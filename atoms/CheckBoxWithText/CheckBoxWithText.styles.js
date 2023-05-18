import { StyleSheet } from "react-native";
import globalStyles from '../../styles/index.styles'
const styles = StyleSheet.create({
    container:{
        ...globalStyles.flexRow,
        ...globalStyles.width100,
        ...globalStyles.justifyContentSpaceBetween,
        paddingHorizontal:5,
        paddingVertical:10
    }
})
export default styles