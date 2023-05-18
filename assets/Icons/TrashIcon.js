import React from 'react';
import { Svg, Path } from 'react-native-svg';
import DeleteBinSvg from 'ServiceApp/assets/svg/DeleteBinSvg'
const TrashIcon = ({ width = 30, height = 30, color = 'black', ...props }) => (
  <DeleteBinSvg color={color}/>
);

export default TrashIcon;
