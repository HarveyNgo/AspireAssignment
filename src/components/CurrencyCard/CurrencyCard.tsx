import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextStyle,
  View,
} from 'react-native';
import {Colors, Styles} from '@common';
import Text from '../Text';

interface CurrencyCardProps {
  currency?: string;
}
const CurrencyCard: React.FC<CurrencyCardProps> = ({currency = 'S'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.currency}>{currency}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Styles.Spacing.medium,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currency: {fontWeight: 'bold'},
});

export default CurrencyCard;
