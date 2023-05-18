export const getDMYFormat = (dateString) => {
    let date = new Date(dateString)
    if(dateString){
        return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
    }
    return undefined
}
export const getUsersMapExcludingCurrentUser = (users,currentUser) => {
    let userList = []
    Object.entries(users).map(([key, value]) => {
        if (key !== currentUser) {
            userList.push({ 'label': value.username, 'value': key })
        }
    })
    return userList
}