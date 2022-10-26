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
import SpendLimitView from './components/SpendLimitView';
const DebitCardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const balance = useSelector(DebitCardSelectors.getBalance, shallowEqual);
  const cardInfo = useSelector(DebitCardSelectors.getCardInfo, shallowEqual);
  const isSpendLimit = useSelector(
    DebitCardSelectors.getIsSpendLimit,
    shallowEqual,
  );
  const spendLimit = useSelector(
    DebitCardSelectors.getSpendLimit,
    shallowEqual,
  );
  const currentSpend = useSelector(
    DebitCardSelectors.getCurrentSpend,
    shallowEqual,
  );

  console.log('hung currentSpend:', currentSpend);

  useEffect(() => {
    dispatch(DebitCardActions.getBalance());
    dispatch(DebitCardActions.getCardInfo());
    dispatch(DebitCardActions.getIsSpendLimit());
    dispatch(DebitCardActions.getSpendLimit());
    dispatch(DebitCardActions.getCurrentSpend());
  }, []);

  return (
    <Container showBackIcon={false}>
      <Balance balance={balance} />
      <SlideViewWithPanResponder>
        <View style={styles.cardContainer}>
          <DebitCardInfo cardInfo={cardInfo} />
          <SpendLimitView spendLimit={spendLimit} currentSpend={currentSpend} />
          <FunctionList
            goToSpendingLimit={() => {
              navigation.navigate(Routers.SpendingLimitScreen);
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
