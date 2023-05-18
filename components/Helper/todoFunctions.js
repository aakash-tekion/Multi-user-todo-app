import { FILTERS_MAP } from "../../constants/constantMaps"
export const compareDates = (dateToCompare,startDate,endDate) => {
    dateToCompare = new Date(dateToCompare)
    if(startDate){
      startDate = new Date(startDate)
    }
    if(endDate){
      endDate = new Date(endDate)
    }
    if(startDate && endDate){
      return startDate<=dateToCompare && dateToCompare<=endDate
    }
    else if(startDate){
      return startDate<=dateToCompare
    }
    else if(endDate){
      return dateToCompare<=endDate
    }
    else{
      return true
    }
  
  }
export const applyFiltersToTodos = (tasks,filters) => {
    
    if(Object.keys(filters).length > 0){
      let filteredTasks = []
      tasks.map(task=>{
        let tagsBool = filters[FILTERS_MAP.TAGS]?  (task[FILTERS_MAP.TAGS][0] === filters[FILTERS_MAP.TAGS]):true
        let assigneByBool = filters[FILTERS_MAP.ASSIGNED_BY]? (task[FILTERS_MAP.ASSIGNED_BY] === filters[FILTERS_MAP.ASSIGNED_BY]):true
        let dateBool =  compareDates(task.date,filters[FILTERS_MAP.START_DATE],filters[FILTERS_MAP.END_DATE])
        if( tagsBool && assigneByBool && dateBool){
            filteredTasks.push(task)
        }
      })
      return filteredTasks
    }
    else{
      return tasks
    }
  }