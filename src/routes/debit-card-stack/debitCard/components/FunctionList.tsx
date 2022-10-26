import {
  TopupIcon,
  WeekSpendLimitIcon,
  NewCardIcon,
  DeactivatedCardIcon,
  FreezeCardIcon,
} from '@assets/icons';
import {Styles} from '@common';
import {Container, Header} from '@components';
import {useNavigation} from '@react-navigation/native';
import {Routers} from '@routes/index';
import React, {useRef} from 'react';
import {Animated, Text, View, PanResponder, StyleSheet} from 'react-native';
import FunctionRow from './FunctionRow';
import {FUNCTION_ID} from 'src/constants/debitCard';
import {CardFunction} from '@models/debitCard';

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
            // onRowPress={() => goToSpendingLimit()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  functionRowContainer: {
    marginTop: 20,
    marginHorizontal: Styles.Spacing.medium,
  },
  functionContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
  },
});

export default FunctionList;
