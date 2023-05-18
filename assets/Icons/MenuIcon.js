import React from 'react';
import { Svg, Path } from 'react-native-svg';

const MenuIcon = ({ size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d="M21,6H3C2.4,6,2,6.4,2,7s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,6,21,6z M21,11H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18 c0.6,0,1-0.4,1-1S21.6,11,21,11z M21,16H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,16,21,16z"/>
    </Svg>
  );
};

export default MenuIcon;