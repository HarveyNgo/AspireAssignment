import {Colors, Styles} from '@common';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Text';

interface CurrencyCardProps {
  currency?: string;
}
const CurrencyCard: React.FC<CurrencyCardProps> = ({currency = 'S$'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.currency}>{currency}</Text>
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
