import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import tagStyles from './Tags.styles.js'
import CloseIcon from '../../assets/Icons/CloseIcon.js'
export default function Tags({tag,removeTags,showCloseIcon}) {
    const removeTagsHandler = (tag) => {
            removeTags(tag)
    }
  return (
    <View style={showCloseIcon?tagStyles.tagsWithClose:tagStyles.tagsWithoutClose}>
        <Text style={tagStyles.tagTitle}>{tag}</Text>
        {showCloseIcon?(<TouchableOpacity onPress={removeTagsHandler.bind(this,tag)}>
            <CloseIcon color='#444'/>
        </TouchableOpacity>):<></>}
        
    </View>
  )
}
