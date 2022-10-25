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

const data = [
  {
    name: 'Top-up account',
    description: 'deposit money to your account to use with card',
    isShowToggle: false,
    isToggle: false,
    icon: TopupIcon,
  },
  {
    name: 'Weekly spending limit',
    description: 'you havent set any limit on card',
    isShowToggle: true,
    isToggle: false,
    icon: WeekSpendLimitIcon,
  },
  {
    name: 'Freeze card',
    description: 'Your debit card is currently active',
    isShowToggle: true,
    isToggle: false,
    icon: FreezeCardIcon,
  },
  {
    name: 'Get a new card',
    description: 'this deactive your current debit card',
    isShowToggle: false,
    isToggle: false,
    icon: NewCardIcon,
  },
  {
    name: 'Deactivated cards',
    description: 'Your previously deactivated cards',
    isShowToggle: false,
    isToggle: false,
    icon: DeactivatedCardIcon,
  },
];

type FunctionListProps = {
  goToSpendingLimit: () => void;
};
const FunctionList: React.FC<FunctionListProps> = ({goToSpendingLimit}) => {
  return (
    <View style={styles.functionRowContainer}>
      {data.map((item, index) => {
        return (
          <FunctionRow
            key={index}
            item={item}
            onSwitchPress={value =>
              // navigation.navigate(Routers.SpendingLimitScreen)
              // navigation.navigate(Routers.DebitCardStack, {
              //   screen: Routers.SpendingLimitScreen,
              //   params: {},
              // })
              goToSpendingLimit()
            }
            onRowPress={() => goToSpendingLimit()}
          />
        );
      })}
      {/* <FunctionRow item={TopupAccount} />
      <FunctionRow
        item={WeeklySpendLimit}
        isSpendLimit={this.props.isSpendLimit}
        onRowPress={() =>
        //   this.props.navigation.navigate('SpendingLimitScreen', {
        //     // onGoBack: () => {
        //     //   this.props.getIsSpendLimit();
        //     // },
        //   })
        }
        onSwitchPress={value => {
          this.props.setIsSpendLimit(value);
        }}
      />
      <FunctionRow item={FreeCard} /> */}
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
