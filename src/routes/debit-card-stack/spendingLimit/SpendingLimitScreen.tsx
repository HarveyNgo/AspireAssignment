import {Colors, Styles} from '@common';
import {Container, Text} from '@components';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SpendingLimitScreen = () => {
  return (
    <Container>
      <View style={styles.debitCardInfoContainer}>
        <Text style={styles.debitCardText}>Spending Limit</Text>
      </View>
      <View style={styles.functionContainer}>
        <Text style={styles.setWeeklyText}>
          Set the weekly debit card spending limit
        </Text>
        <View style={styles.inputContainer}>
          <Text>$$</Text>
          <TextInput
            // onChangeText={this.onInputChange}
            // value={this.state.spendLimit}
            style={styles.input}
          />
        </View>
        <View style={styles.seperator} />
        <Text style={styles.explaination}>
          Here weekly means the last 7 days - not the calendar week
        </Text>
        {/* <SpendLimitList
          onPress={spendLimitItem =>
            this.setState({
              spendLimit: formatNumber(spendLimitItem.number),
            })
          }
        /> */}

        <View style={styles.saveButtonContainer}>
          {/* <SaveButton
            haveSpendAmount={this.state.spendLimit !== '0'}
            onPress={() => {
              const spendLimitAmount = formatNumberNoCommas(
                this.state.spendLimit,
              );
              this.props.saveSpendLimit(spendLimitAmount);
            }}
          /> */}
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
  debitCardInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 20,
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
    backgroundColor: 'white',
    flex: 3,
    paddingHorizontal: 20,
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
    position: 'absolute',
    bottom: 0,
    marginBottom: 10,
    width: '60%',
  },
  inputContainer: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  seperator: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#D1D7D8',
    marginBottom: 10,
  },
  explaination: {color: 'grey', fontSize: 11, marginBottom: 20},
  setWeeklyText: {marginTop: 20},
});

export default SpendingLimitScreen;
