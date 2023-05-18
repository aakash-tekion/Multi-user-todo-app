export const passwordRule = (fieldId,valueToTest) => {
    let errorMessage = []
    if(!(/[A-Z]/.test(valueToTest))){
        errorMessage.push('uppercase character')
    }
    if(!(/[a-z]/.test(valueToTest))){
        errorMessage.push('lowercase character')
    }
    if(!(/[0-9]/.test(valueToTest))){
        errorMessage.push('number')
    }
    let isValid = false
    if(valueToTest.length<8){

        return { isValid, message: __('Password must contain atleast 8 characters') };
    }
    let lengthOfErrors = errorMessage.length
    isValid = lengthOfErrors === 0?true:false
    
    if(!isValid){
        let message = errorMessage.slice(0,lengthOfErrors-1).join(', ')
        message = message?message+' and '+errorMessage[lengthOfErrors-1] : errorMessage[lengthOfErrors-1]
        return { isValid, message: __('Password must contain '+message) };
    }
    else{
        return  { isValid }
    }
    
    
}