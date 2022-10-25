import * as React from 'react';
import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {SpendingLimitSuggestion} from '../../../models/debitCard';
import styled from 'styled-components';

interface IProps {
  item: SpendingLimitSuggestion;
  onPress?: Function;
}

const SuggestionItem: React.FC<IProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      key={item.id}
      style={styles.container}
      onPress={() => onPress(item)}>
      <Text style={styles.name}>$$ </Text>
      <Text style={styles.description}>{item.number}</Text>
    </TouchableOpacity>
  );
};

type Style = {
  container: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    backgroundColor: '#90ee90',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    // justifyContent: 'space-between',
    // marginVertical: 10,
    // marginHorizontal: 20,
  },
  name: {
    color: '#01d167',
  },
  description: {
    color: '#01d167',
  },
});

export default SuggestionItem;
