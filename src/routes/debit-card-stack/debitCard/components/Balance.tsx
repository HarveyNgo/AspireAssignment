import {Colors, Styles} from '@common';
import {Text} from '@components';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Balance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.debitCardText}>Debit Card</Text>
      <Text style={styles.availableBalance}>Available balance</Text>
      <View style={styles.balanceContainer}>
        <View style={styles.currencyContainer}>
          <Text>S$</Text>
        </View>
        <Text style={styles.amount}>3000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  debitCardText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  availableBalance: {
    marginTop: 24,
    fontSize: 14,
  },
  balanceContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  currencyContainer: {
    paddingHorizontal: Styles.Spacing.normal,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currency: {},
  amount: {
    fontSize: 24,
    marginStart: Styles.Spacing.normal,
  },
});

export default Balance;
