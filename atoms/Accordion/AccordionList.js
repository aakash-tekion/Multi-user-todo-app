import React, { useState } from 'react'
import { Text, FlatList, View } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import accordionStyles from './Accordion.styles'
import CheckBoxWithText from '../CheckBoxWithText/CheckBoxWithText'
import { ChevronDown, ChevronUp } from 'ServiceApp/assets/svg';
import RadioButtonGroup from 'ServiceApp/atoms/RadioButtonGroup'
export default function AccordionList(props) {
  const { sections, sectionHandlers } = props
  const [activeSections, setActiveSections] = useState([])
  const radioButtonSelectHandler = (section,value) => {
    let functionToCall = sectionHandlers[section.key].setValue
    let deselect = false
    if (value === sectionHandlers[section.key].value) {
      deselect = true
    }
    functionToCall(value, deselect)

  }
  const renderHeader = (section, _ , isActive) => {
    return (
      <View style={accordionStyles.header}>
        <Text style={accordionStyles.title}>{section.title}</Text>
        {isActive ? <ChevronUp /> : <ChevronDown />}
      </View>)

  }
  const renderContent = (section) => {
    return <RadioButtonGroup options={section.content}
      onPress={(value) => {radioButtonSelectHandler(section,value)}}
      selected={sectionHandlers[section.key]['value']}
      radioGroupContainerStyle={accordionStyles.containerStyle}
    />
  }
  const setActiveSectionHandler = (section) => {
    setActiveSections(section)
  }
  return (
    <Accordion
      sections={sections}
      renderHeader={renderHeader}
      renderContent={renderContent}
      activeSections={activeSections}
      onChange={(section)=>{ setActiveSectionHandler(section) }}
      containerStyle={accordionStyles.containerStyle}
    />
  )
}
