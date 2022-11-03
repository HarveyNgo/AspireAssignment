import {Container} from '@components';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

type CountComponentProps = {};
const CountComponent: React.FC<CountComponentProps> = ({}) => {
  console.log('hung CountComponent');
  const [value, setValue] = useState(0);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('hung CountComponent Press');
        for (var i = 0; i < 3; i++) {
          setValue(prev => prev + 1);
        }
      }}>
      <Text>Count {value}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(CountComponent);
