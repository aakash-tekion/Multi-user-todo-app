export const handleValidation = ({payload},{setState}) => {
    const { errors } = payload;
    setState({ errors });
}
export const handleFieldChange = ({ payload }, { getState, setState }) => {
    const { id, value } = payload
    setState({
        values:{
            ...getState().values,
            [id]: value
        }
    })
}