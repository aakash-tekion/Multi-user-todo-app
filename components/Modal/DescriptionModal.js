import React, { useEffect, useState,memo } from 'react'
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native'
import globalStyles from '../../styles/index.styles.js'
import modalStyles from '../../styles/Modal.styles.js'
import CloseIcon from '../../assets/Icons/CloseIcon.js'
function DescriptionModal({ visible, closeModalHandler, description }) {
    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={[globalStyles.container, modalStyles.modalTransparentBackground]}>
                <View style={modalStyles.modalContainer}>
                    <View style={modalStyles.modalHeader} >
                        <View style={modalStyles.modalHeaderTitleContainer}>
                            <Text style={modalStyles.modalHeaderTitle}>Task Description</Text>
                        </View>

                        <TouchableOpacity onPress={closeModalHandler} style={modalStyles.closeButton}>
                            <CloseIcon size={24} style={modalStyles.closeButtonText} />
                        </TouchableOpacity>
                    </View>
                    <View style={modalStyles.descriptionContainer}>
                        <Text>{description}</Text>
                    </View>
                </View>
            </View>

        </Modal>

    )
}

export default memo(DescriptionModal)