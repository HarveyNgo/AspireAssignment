import {Colors} from '@common';
import {SpendingLimitSuggestion} from '@models/debitCard';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {formatAmount} from '@utils/format';

type SuggestionItemProps = {
  item: SpendingLimitSuggestion;
  onPress?: (item: SpendingLimitSuggestion) => void;
  currency: string;
};

const SuggestionItem: React.FC<SuggestionItemProps> = ({
  item,
  onPress,
  currency,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress && onPress(item)}>
      <Text style={styles.name}>{currency} </Text>
      <Text style={styles.description}>
        {String(formatAmount(item.number))}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#14d16712',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  name: {
    color: Colors.primary,
  },
  description: {
    color: Colors.primary,
  },
});

export default SuggestionItem;
