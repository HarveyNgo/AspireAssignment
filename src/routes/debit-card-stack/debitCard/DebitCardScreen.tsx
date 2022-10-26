import {Colors, Styles} from '@common';
import {Container, SlideViewWithPanResponder} from '@components';
import {useNavigation} from '@react-navigation/native';
import {Routers} from '@routes/index';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {DebitCardActions} from 'src/store/actions';
import {DebitCardSelectors} from 'src/store/selectors';
import Balance from './components/Balance';
import DebitCardInfo from './components/DebitCardInfo';
import FunctionList from './components/FunctionList';
const DebitCardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const balance = useSelector(DebitCardSelectors.getBalance, shallowEqual);
  const cardInfo = useSelector(DebitCardSelectors.getCardInfo, shallowEqual);

  useEffect(() => {
    dispatch(DebitCardActions.getBalance());
    dispatch(DebitCardActions.getCardInfo());
  }, []);

  return (
    <Container showBackIcon={false}>
      <Balance balance={balance} />
      <SlideViewWithPanResponder>
        <View style={styles.cardContainer}>
          <DebitCardInfo cardInfo={cardInfo} />
          <FunctionList
            goToSpendingLimit={() => {
              console.log('hung goToSpendingLimit');
              navigation.navigate(Routers.SpendingLimitScreen);
              // navigation.navigate(Routers.DebitCardStack, {
              //   screen: Routers.SpendingLimitScreen,
              // });
            }}
          />
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
