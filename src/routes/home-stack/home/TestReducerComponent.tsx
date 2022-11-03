import {Container} from '@components';
import homeActions from '@store/home/home.actions';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';

type TestReducerComponentProps = {};
const TestReducerComponent: React.FC<TestReducerComponentProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(homeActions.homeTest());
      }}>
      <Text>Dispatch action</Text>
    </TouchableOpacity>
  );
};

export default React.memo(TestReducerComponent);
