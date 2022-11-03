import {Container} from '@components';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

type ChildComponentProps = {
  onPress: () => void;
};
const ChildComponent: React.FC<ChildComponentProps> = ({onPress}) => {
  console.log('hung ChildComponent');

  return (
    <TouchableOpacity
      onPress={() => {
        console.log('hung Child Press');
        onPress();
      }}>
      <Text>Child</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ChildComponent);
