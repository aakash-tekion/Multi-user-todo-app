import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { View } from 'react-native'
import iconStyles from '../../styles/Icon.styles.js'
const DropDownIcon = ({ size, color }) => {
    const triangleWidth = size * 0.5;
    const triangleHeight = size * 0.3;
    const centerX = size * 0.5;
    const centerY = size * 0.5;

    return (
        <View style={iconStyles.dropDownIcon}>
            <Svg width={size} height={size}>
                <Path
                    d={`M ${centerX - triangleWidth / 2} ${centerY - triangleHeight / 2} L ${centerX} ${centerY + triangleHeight / 2} L ${centerX + triangleWidth / 2} ${centerY - triangleHeight / 2} Z`}
                    fill={color}
                />
            </Svg>

        </View>

    );
};

export default DropDownIcon;