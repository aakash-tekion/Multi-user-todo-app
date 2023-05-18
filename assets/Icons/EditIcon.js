import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const EditIcon = ({ color = '#444', size = 24 }) => {
  return (
    
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M19.689 5.31099C20.0777 4.92231 20.0777 4.29277 19.689 3.90408L17.096 1.31108C16.7073 0.922391 16.0777 0.922391 15.689 1.31108L14.107 2.89308L18.107 6.89308L19.689 5.31099ZM13.107 3.47608L3.107 13.4761V16.8931H6.524 6.524L16.524 6.524L13.107 3.47608ZM1.107 17.8931V20.0001H3.214L17.321 5.89308L15.214 3.78608L1.107 17.8931Z"
          fill={color}
        />
      </Svg>
  
  );
};


export default EditIcon;