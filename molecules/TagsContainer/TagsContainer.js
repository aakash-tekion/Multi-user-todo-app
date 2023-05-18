import Tags from "../../atoms/Tags/Tags";
import React from 'react'
import { View } from 'react-native'
import tagsContainerStyles from './TagsContainer.css'
export default function TagsContainer({ customStyle, tags, setHandler,showCloseIcon }) {
  const removeTags = (tagToRemove) => {
    tags = tags.filter(tag=>{
      return tag!=tagToRemove
    })
    setHandler(tags)
  }
  return (
    <View style={[tagsContainerStyles.tagsContainer,customStyle]}>
        {
          tags.map( tag => {
            return <Tags tag={tag} key={tag}  removeTags={removeTags} showCloseIcon={showCloseIcon}/>
          })
        }
        
    </View>
  )
}
