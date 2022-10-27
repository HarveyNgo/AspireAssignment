import {
  DeactivatedCardIcon,
  FreezeCardIcon,
  NewCardIcon,
  TopupIcon,
  WeekSpendLimitIcon,
} from '@assets/icons';
import {Colors, Styles} from '@common';
import {CardFunction} from '@models/debitCard';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FUNCTION_ID} from '@constants/debitCard';
import FunctionRow from './FunctionRow';

type FunctionListProps = {
  onSwitchPress: (item: CardFunction) => void;
  isSpendLimit: boolean;
};
const FunctionList: React.FC<FunctionListProps> = ({
  onSwitchPress,
  isSpendLimit,
}) => {
  const data: CardFunction[] = [
    {
      id: FUNCTION_ID.TOP_UP,
      name: 'Top-up account',
      description: 'deposit money to your account to use with card',
      isShowToggle: false,
      isToggle: false,
      icon: TopupIcon,
    },
    {
      id: FUNCTION_ID.WEEK_SPEND_LIMIT,
      name: 'Weekly spending limit',
      description: 'you havent set any limit on card',
      isShowToggle: true,
      isToggle: isSpendLimit,
      icon: WeekSpendLimitIcon,
    },
    {
      id: FUNCTION_ID.FREEZE_CARD,
      name: 'Freeze card',
      description: 'Your debit card is currently active',
      isShowToggle: true,
      isToggle: false,
      icon: FreezeCardIcon,
    },
    {
      id: FUNCTION_ID.GET_NEW_CARD,
      name: 'Get a new card',
      description: 'this deactive your current debit card',
      isShowToggle: false,
      isToggle: false,
      icon: NewCardIcon,
    },
    {
      id: FUNCTION_ID.DEACTIVATED_CARD,
      name: 'Deactivated cards',
      description: 'Your previously deactivated cards',
      isShowToggle: false,
      isToggle: false,
      icon: DeactivatedCardIcon,
    },
  ];

  return (
    <View style={styles.functionRowContainer}>
      {data.map((item, index) => {
        return (
          <FunctionRow
            key={index}
            item={item}
            onSwitchPress={value => onSwitchPress(item)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  functionRowContainer: {
    marginTop: Styles.Spacing.large,
    marginHorizontal: Styles.Spacing.medium,
  },
  functionContainer: {
    borderTopRightRadius: Styles.Spacing.large,
    borderTopLeftRadius: Styles.Spacing.large,
    backgroundColor: Colors.white,
  },
});

export default FunctionList;
