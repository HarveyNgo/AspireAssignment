import {Colors, Styles} from '@common';
import {CardFunction} from '@models/debitCard';
import * as React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

type FunctionRowProps = {
  item: CardFunction;
  onRowPress?: () => void;
  onSwitchPress?: (value: boolean) => void;
};

const FunctionRow: React.FC<FunctionRowProps> = ({item, onSwitchPress}) => {
  const Icon = item.icon;
  return (
    <View style={styles.rowContainer}>
      <View style={styles.iconContainer}>
        <Icon />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>

      {item.isShowToggle && (
        <Switch
          trackColor={{
            false: '#E9E9EB',
            true: '#34C759',
          }}
          value={item.isToggle}
          // disabled={!switchValue}
          onValueChange={value => {
            onSwitchPress && onSwitchPress(value);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  nameContainer: {marginStart: Styles.Spacing.medium},
  name: {
    color: Colors.secondary,
  },
  description: {
    color: Colors.deactive,
  },
  iconContainer: {flexDirection: 'row'},
});

export default FunctionRow;
