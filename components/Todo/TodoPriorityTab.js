import React, { useEffect, useState } from 'react'
import { Dimensions, View, Text, TouchableOpacity } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import Tab from './Tab'
import FilterIcon from '../../assets/Icons/FilterIcon.js'
import todoStyles from '../../styles/Todo.styles.js'
import globalStyles from '../../styles/index.styles.js'

import tabHeaderStyles from '../../styles/TabView.styles.js'
export default function TodoTabs({ tasks, navigation }) {
    const layout = Dimensions.get('window')
    const [modalOpen, setModalOpen] = useState(false)
    const High = () => <Tab totalTasks={tasks} priority={'High'} navigation={navigation} />
    const Medium = () => <Tab totalTasks={tasks} priority={'Medium'} navigation={navigation} />
    const Low = () => <Tab totalTasks={tasks} priority={'Low'} navigation={navigation} />
    const scenes = SceneMap({
        High: High,
        Low: Low,
        Medium: Medium
    })
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'High', title: 'High' },
        { key: 'Medium', title: 'Medium' },
        { key: 'Low', title: 'Low' },
    ]);
    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    const CustomTabBar = (props) => {
        return (
            <View style={globalStyles.flexRow}>
                <TouchableOpacity onPress={openModal} style={todoStyles.filterIcon}>
                    <FilterIcon/>
                </TouchableOpacity>
                <TabBar {...props} style={tabHeaderStyles.containerStyle} indicatorStyle={tabHeaderStyles.indicatorStyle} labelStyle={tabHeaderStyles.labelStyle} />
            </View> 
        )
    }
    return (
        <View style={globalStyles.flex1}>
            <TabView
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderScene={scenes}
                renderTabBar={(props) => <CustomTabBar {...props} />}
                navigationState={{ index, routes }}
                swipeEnabled={false}
            />
        </View>
    )
}