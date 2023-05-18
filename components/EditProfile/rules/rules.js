
export const isNumber = (fieldId,valueToTest) => {
    let isValid 
    isValid = /[0-9]/.test(valueToTest)
    if(isValid){
        if(valueToTest.length>10){
            isValid = false
            return { isValid,message:__('Contact number length cannot be greater than 10')}
        }
    }
    return isValid?{ isValid }:{ isValid ,message:__('Contact Number must contain only numbers') }
}