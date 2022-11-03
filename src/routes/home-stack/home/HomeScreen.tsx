import {Container} from '@components';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import ChildComponent from './ChildComponent';
import CountComponent from './CountComponent';

const HomeScreen = () => {
  const [user, setUser] = useState({name: 'hung'});
  console.log('hung HomeScreen');
  return (
    <SafeAreaView>
      <ChildComponent
        onPress={useCallback(() => {
          setUser({name: 'hung'});
        }, [user.name])}
      />
      <CountComponent />
    </SafeAreaView>
  );
};

export default HomeScreen;
