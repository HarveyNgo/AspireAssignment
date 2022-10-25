import React from 'react';
import {StyleProp, StyleSheet, Text as RNText, TextStyle} from 'react-native';
import {Colors} from 'src/common';

interface TextProps {
  color?: string;
  style?: StyleProp<TextStyle> | undefined;
  children?: any;
}
const Text: React.FC<TextProps> = ({color = Colors.white, style, children}) => {
  return <RNText style={[{color: color}, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({});

export default Text;
