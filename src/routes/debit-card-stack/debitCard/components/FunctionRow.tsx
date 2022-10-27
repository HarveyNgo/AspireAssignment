import {Colors, Styles} from '@common';
import {CardFunction} from '@models/debitCard';
import * as React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

type FunctionRowProps = {
  item: CardFunction;
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
            false: Colors.gray,
            true: Colors.primary,
          }}
          value={item.isToggle}
          onValueChange={value => {
            onSwitchPress && onSwitchPress(value);
          }}
          style={styles.switchStyle}
        />
      )}
    </View>
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
  iconContainer: {flexDirection: 'row'},
  switchStyle: {transform: [{scaleX: 0.8}, {scaleY: 0.8}]},
});

export default FunctionRow;
