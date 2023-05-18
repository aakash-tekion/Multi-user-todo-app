import React, { useCallback, useState, memo} from 'react'
import { View,  Modal, TouchableOpacity, Text } from 'react-native'
import Button from '../../atoms/OrgButton/Button.js'
import globalStyles from '../../styles/index.styles.js'
import modalStyles from '../../styles/Modal.styles.js'
import { tagsOptions } from '../../constants/selectOptions.js'
import CloseIcon from '../../assets/Icons/CloseIcon.js'
import { withNavigation } from 'react-navigation'
import AccordionList from '../../atoms/Accordion/AccordionList.js'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilters,resetFilters } from '../../actions/todoActionHandler.js'
import DateAndTimePicker from '../../molecules/DateAndTimePicker/DateAndTimePicker.js'
import { FILTERS_MAP } from '../../constants/constantMaps.js'
import { getUsersMapExcludingCurrentUser } from '../Helper/helperFunctions.js'
function FilterModal({ visible, closeModalHandler,navigation }) {
    const dispatch = useDispatch()
    const [filters, setFilters] = useState({
        [FILTERS_MAP.TAGS]: '',
        [FILTERS_MAP.ASSIGNED_BY]: '',
        [FILTERS_MAP.START_DATE]: '',
        [FILTERS_MAP.END_DATE]: ''
    })
    const users = useSelector(state => state.appData.users)
    const currentUser = useSelector(state => state.appData.currentUser)
    const userList = getUsersMapExcludingCurrentUser(users,currentUser)
    const applyFiltersHandler = useCallback(() => {
        dispatch(applyFilters(filters))
        closeModalHandler()
        navigation.navigate('Home')
    },[])
    const removeFiltersHandler = useCallback(() => {
        dispatch(resetFilters())
        setFilters({
            [FILTERS_MAP.TAGS]: '',
            [FILTERS_MAP.ASSIGNED_BY]: '',
            [FILTERS_MAP.START_DATE]: '',
            [FILTERS_MAP.END_DATE]: ''
        })
    },[])
    const addFilters = (key, item, deselect) => {
        if (deselect) {
            setFilters({
                ...filters,
                [key]: ''
            })
        }
        else {
            setFilters({
                ...filters,
                [key]: item
            })

        }
    }
    const sections = [
        {
            title: 'Tags',
            content: tagsOptions,
            key: FILTERS_MAP.TAGS
        },
        {
            title: 'Assigned By',
            content: userList,
            key: FILTERS_MAP.ASSIGNED_BY
        }
    ];
    const sectionHandlers = {
        'tags': {
            setValue: (item, deselect) => { addFilters(FILTERS_MAP.TAGS, item, deselect) },
            value: filters[FILTERS_MAP.TAGS]
        },
        'assignedBy': {
            setValue: (item, deselect) => { addFilters(FILTERS_MAP.ASSIGNED_BY, item, deselect) },
            value: filters[FILTERS_MAP.ASSIGNED_BY]
        }
    }
    const dateHandler = (key,date) => {
        setFilters({
            ...filters,
            [key]:date
        })
    }
    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={[globalStyles.container, modalStyles.modalTransparentBackground]}>
                <View style={modalStyles.modalContainer}>
                    <View style={modalStyles.modalHeader} >
                        <View style={modalStyles.modalHeaderTitleContainer}>
                            <Text style={modalStyles.modalHeaderTitle}>Filters</Text>
                        </View>
                        <TouchableOpacity onPress={closeModalHandler} style={modalStyles.closeButton}>
                            <CloseIcon size={24} style={modalStyles.closeButtonText} />
                        </TouchableOpacity>
                    </View>
                    <AccordionList sections={sections} sectionHandlers={sectionHandlers} />
                    <DateAndTimePicker label={'Start date'} handler={(date)=>{dateHandler(FILTERS_MAP.START_DATE,date)}}/>
                    <DateAndTimePicker label={'End date'} handler={(date)=>{dateHandler(FILTERS_MAP.END_DATE,date)}}/>
                    <View style={modalStyles.footer}>
                        <Button text='Reset' customStyle={modalStyles.button} handler={removeFiltersHandler} />
                        <Button text='Apply' customStyle={modalStyles.button} handler={applyFiltersHandler} />
                    </View>
                </View>
            </View>

        </Modal>

    )
}

export default withNavigation(memo(FilterModal))