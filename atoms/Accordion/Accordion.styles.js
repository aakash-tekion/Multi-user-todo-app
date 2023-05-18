import { StyleSheet } from "react-native";
import globalStyles from '../../styles/index.styles'
const styles = StyleSheet.create({
    containerStyle: {
        width: '90%',
        paddingVertical:10
    },
    title: {
        fontSize: 16,
    },
    header: {
        ...globalStyles.flexRow,
        ...globalStyles.width100,
        ...globalStyles.justifyContentSpaceBetween,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderColor: '#D4D5D6',
        borderWidth:2,
        marginTop:10

    }

})
export default styles