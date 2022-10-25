import * as React from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import {CardFunction} from '@models/debitCard';
import {Colors, Styles} from '@common';

type FunctionRowProps = {
  item: CardFunction;
  onRowPress?: () => void;
  onSwitchPress?: (value: boolean) => void;
  switchValue?: boolean;
};

const FunctionRow: React.FC<FunctionRowProps> = ({
  item,
  onRowPress,
  onSwitchPress,
  switchValue,
}) => {
  const Icon = item.icon;
  return (
    <TouchableOpacity onPress={onRowPress} style={styles.rowContainer}>
      <View style={{flexDirection: 'row'}}>
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
          value={switchValue}
          disabled={!switchValue}
          onValueChange={value => {
            onSwitchPress && onSwitchPress(value);
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  nameContainer: {marginStart: Styles.Spacing.medium},
  name: {
    color: Colors.secondary,
  },
  description: {
    color: Colors.deactive,
  },
});

export default FunctionRow;
