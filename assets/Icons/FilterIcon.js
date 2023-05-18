import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const FilterIcon = () => {
  return (
    <View>
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path d="M6 8h12v2H6zM6 14h8v2H6z" fill="#fff" />
      </Svg>
    </View>
  );
};

export default FilterIcon;