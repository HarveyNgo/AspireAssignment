import {Colors, Styles} from '@common';
import {Text, Title} from '@components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CurrencyCard} from '@components';
import {formatAmount} from '@utils/format';

type BalanceProps = {
  balance: number;
  currency: string;
};
const Balance: React.FC<BalanceProps> = ({balance, currency}) => {
  return (
    <View style={styles.container}>
      <Title title="Debit Card" />
      <Text style={styles.availableBalance}>Available balance</Text>
      <View style={styles.balanceContainer}>
        <CurrencyCard currency={currency} />
        <Text style={styles.amount}>{formatAmount(balance)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  availableBalance: {
    marginTop: Styles.Spacing.xlarge,
    fontSize: Styles.FontSize.small,
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
