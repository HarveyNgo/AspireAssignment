import {Colors, Styles} from '@common';
import {Container, SlideViewWithPanResponder} from '@components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Balance from './components/Balance';
import DebitCardInfo from './components/DebitCardInfo';
import FunctionList from './components/FunctionList';
const DebitCardScreen = () => {
  return (
    <Container showBackIcon={false}>
      <Balance />
      <SlideViewWithPanResponder>
        <View style={styles.cardContainer}>
          <DebitCardInfo cardInfo={undefined} />
          <FunctionList />
        </View>
      </SlideViewWithPanResponder>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: -Styles.Spacing.medium,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginTop: 50,
  },
});

export default DebitCardScreen;
