import {TopupIcon} from '@assets/icons';
import {Styles} from '@common';
import {Container, Header} from '@components';
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
    icon: TopupIcon,
  },
  {
    name: 'Freeze card',
    description: 'Your debit card is currently active',
    isShowToggle: true,
    isToggle: false,
    icon: TopupIcon,
  },
  {
    name: 'Freeze Card',
    description: 'your debit card is currently active',
    isShowToggle: true,
    isToggle: false,
    icon: TopupIcon,
  },
  {
    name: 'Get a new card',
    description: 'this deactive your current debit card',
    isShowToggle: false,
    isToggle: false,
    icon: TopupIcon,
  },
  {
    name: 'Deactivated cards',
    description: 'Your previously deactivated cards',
    isShowToggle: false,
    isToggle: false,
    icon: TopupIcon,
  },
];
const FunctionList = () => {
  return (
    <View style={styles.functionRowContainer}>
      {data.map((item, index) => {
        return <FunctionRow key={index} item={item} />;
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
