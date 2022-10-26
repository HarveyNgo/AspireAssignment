import {SpendingLimitSuggestion} from '@models/debitCard';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SuggestionItem from './SuggestionItem';

const data = [
  {
    id: 1,
    number: 5000,
  },
  {
    id: 2,
    number: 10000,
  },
  {
    id: 3,
    number: 15000,
  },
];
type SuggestionListProps = {
  onPress?: (item: SpendingLimitSuggestion) => void;
};

const SuggestionList: React.FC<SuggestionListProps> = ({onPress}) => {
  return (
    <View style={styles.container}>
      {data.map(item => {
        return <SuggestionItem key={item.id} item={item} onPress={onPress} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  name: {
    color: '#0c365a',
  },
  description: {
    color: 'gray',
  },
});

export default SuggestionList;
