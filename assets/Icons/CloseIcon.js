import React from 'react';
import { Svg, Path } from 'react-native-svg';

const CloseIcon = ({ size = 18, color = '#000000', ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fill={color}
      d="M12 10.586l-4.95-4.95a1.5 1.5 0 0 0-2.122 2.122L9.878 12l-4.95 4.95a1.5 1.5 0 0 0 2.122 2.122L12 13.122l4.95 4.95a1.5 1.5 0 0 0 2.122-2.122L14.122 12l4.95-4.95a1.5 1.5 0 0 0-2.122-2.122L12 10.878z"
    />
  </Svg>
);

export default CloseIcon;