import {Colors} from '@common';
import {Text} from '@components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SpendLimitProgress from './SpendLimitProgress';

type SpendLimitViewProps = {
  spendLimit: number;
  currentSpend: number;
};
const SpendLimitView: React.FC<SpendLimitViewProps> = ({
  spendLimit,
  currentSpend,
}) => {
  return (
    <View style={styles.spendLimitContainer}>
      <View style={styles.spendLimitTextContainer}>
        <Text style={{color: Colors.black}}>Debit card spending limit</Text>
        <View style={styles.spendLimitAmountContainer}>
          <Text style={styles.currentSpend}>${currentSpend}</Text>
          <Text style={styles.spendLimit}> | ${spendLimit}</Text>
        </View>
      </View>
      <SpendLimitProgress currentSpend={currentSpend} spendLimit={spendLimit} />
    </View>
  );
};

const styles = StyleSheet.create({
  spendLimitContainer: {marginTop: 10, marginHorizontal: 20},
  spendLimitTextContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  spendLimitAmountContainer: {flexDirection: 'row'},
  currentSpend: {color: Colors.primary},
  spendLimit: {color: Colors.deactive},
});

export default SpendLimitView;
