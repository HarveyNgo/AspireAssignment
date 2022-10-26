import React from 'react';
import {StyleProp, StyleSheet, Text as RNText, TextStyle} from 'react-native';
import {Colors, Styles} from '@common';
import Text from '../Text';

interface TitleProps {
  title: string;
  style?: StyleProp<TextStyle> | undefined;
}
const Title: React.FC<TitleProps> = ({style, title}) => {
  return <Text style={[styles.titleStyle, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: Styles.FontSize.big,
  },
});

export default Title;
