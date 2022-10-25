import {SafeAreaView} from 'react-native';
import React from 'react';

export interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default Container;
