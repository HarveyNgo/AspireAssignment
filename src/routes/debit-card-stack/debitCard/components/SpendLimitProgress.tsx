import {Colors} from '@common';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IProps {
  currentSpend: number;
  spendLimit: number;
}

const SpendLimitProgress: React.FC<IProps> = ({currentSpend, spendLimit}) => {
  return (
    <View style={{}}>
      <View style={styles.progressContainer} />
      <View
        style={[
          styles.progressView,
          {
            width: `${(currentSpend / spendLimit) * 100}%`,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    backgroundColor: '#e5faf0',
    width: '100%',
    height: 20,
    borderRadius: 20,
  },
  progressView: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderRightColor: '#e5faf0',
    borderTopColor: Colors.primary,
    height: 20,
  },
});

export default SpendLimitProgress;
