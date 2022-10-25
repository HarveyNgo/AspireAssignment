import {Container, Header} from '@components';
import React, {useRef} from 'react';
import {Animated, Text, View, PanResponder, StyleSheet} from 'react-native';
import Balance from './components/Balance';
import DebitCardInfo from './components/DebitCardInfo';
import SlideView from './components/SlideView';
import SlideViewWithPan from './components/SlideViewWithPan';

const DebitCardScreen = () => {
  return (
    <Container>
      <Header />
      {/* <Text style={styles.debitCardText}>Debit Card</Text> */}
      <Balance />
      <View>
        {/* <SlideViewWithPan /> */}
        <DebitCardInfo cardInfo={undefined} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  debitCardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default DebitCardScreen;
