import React from 'react';
import {TouchableOpacity} from 'react-native';
import ImageBackSvg from '../../../assets/icons/back_v2.svg';

const BackAtom_V2 = () => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: 36,
        height: 30,
        width: 30,
        borderRadius: 5,
        borderColor: 'lightgrey',
      }}>
      <ImageBackSvg
        style={{
          height: undefined,
          width: undefined,
          flex: 1,
          resizeMode: 'contain',
        }}
      />
    </TouchableOpacity>
  );
};

export default BackAtom_V2;
