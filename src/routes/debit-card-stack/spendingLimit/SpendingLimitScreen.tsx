import {WeekLimitIcon} from '@assets/icons';
import {Colors, Styles} from '@common';
import {Container, CurrencyCard, Text, Title} from '@components';
import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import SaveButton from './components/SaveButton';
import SpendLimitList from './components/SuggestionList';

const SpendingLimitScreen = () => {
  const [spendLimitAmount, setSpendLimitAmount] = useState(0);
  return (
    <Container>
      <Title title={'Spending Limit'} />
      <View style={styles.functionContainer}>
        <View style={{height: '85%'}}>
          <View style={styles.weeklyTextContainer}>
            <WeekLimitIcon color={Colors.secondary} />
            <Text style={styles.setWeeklyText}>
              Set the weekly debit card spending limit
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <CurrencyCard />
            <TextInput
              // onChangeText={this.onInputChange}
              value={String(spendLimitAmount)}
              style={styles.input}
            />
          </View>
          <View style={styles.seperator} />
          <Text style={styles.explaination}>
            Here weekly means the last 7 days - not the calendar week
          </Text>
          <SpendLimitList
            onPress={spendLimitItem => {
              setSpendLimitAmount(spendLimitItem.number);
            }}
          />
        </View>
        <View style={styles.saveButtonContainer}>
          <SaveButton
            haveSpendAmount={false}
            onPress={() => {
              // const spendLimitAmount = formatNumberNoCommas(
              //   this.state.spendLimit,
              // );
              // this.props.saveSpendLimit(spendLimitAmount);
            }}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c365a',
  },
  subContainer: {
    flex: 1,
  },

  debitCardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  availableBalance: {
    color: 'white',
    marginTop: 15,
  },
  balanceContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  currency: {
    color: 'white',
    marginRight: 10,
  },
  functionContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.white,
    marginTop: 50,
    paddingHorizontal: 20,
    marginHorizontal: -18,
    height: '90%',
  },
  input: {
    fontSize: 15,
    borderRadius: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    flex: 1,
    marginTop: 4,
    marginStart: 5,
  },
  saveButtonContainer: {
    alignSelf: 'center',
    // position: 'absolute',
    // bottom: 0,
    // marginBottom: 10,
    width: '60%',
  },
  inputContainer: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  seperator: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.deactive,
    marginTop: 10,
    marginBottom: 10,
  },
  explaination: {color: 'grey', fontSize: 11, marginBottom: 20},
  setWeeklyText: {
    color: Colors.secondary,
    fontSize: Styles.FontSize.medium,
    marginStart: Styles.Spacing.small,
  },
  weeklyTextContainer: {
    flexDirection: 'row',
    marginVertical: Styles.Spacing.medium,
  },
});

export default SpendingLimitScreen;
