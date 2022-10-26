import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextStyle,
  View,
} from 'react-native';
import {Colors, Styles} from 'src/common';
import Text from '../Text';

interface CurrencyCardProps {
  currency?: string;
}
const CurrencyCard: React.FC<CurrencyCardProps> = ({currency = 'S'}) => {
  return (
    <View style={styles.container}>
      <Text>{currency}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Styles.Spacing.normal,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CurrencyCard;
