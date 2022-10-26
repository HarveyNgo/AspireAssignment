import {WeekLimitIcon} from '@assets/icons';
import {Colors, Styles} from '@common';
import {Text} from '@components';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const InputHeader = () => {
  return (
    <View style={styles.weeklyTextContainer}>
      <WeekLimitIcon color={Colors.secondary} />
      <Text style={styles.setWeeklyText}>
        Set the weekly debit card spending limit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  setWeeklyText: {
    color: Colors.secondary,
    fontSize: Styles.FontSize.medium,
    marginStart: Styles.Spacing.small,
  },
  weeklyTextContainer: {
    flexDirection: 'row',
    marginVertical: Styles.Spacing.medium,
  },
});

export default InputHeader;
