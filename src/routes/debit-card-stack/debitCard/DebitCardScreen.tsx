import {Colors, Styles} from '@common';
import {Container, SlideViewWithPanResponder} from '@components';
import {CardFunction} from '@models/debitCard';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Routers} from '@routes/index';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {FUNCTION_ID} from '@constants/debitCard';
import {DebitCardActions} from '@store/actions';
import {DebitCardSelectors} from '@store/selectors';
import Balance from './components/Balance';
import DebitCardInfo from './components/DebitCardInfo';
import FunctionList from './components/FunctionList';
import SpendLimitView from './components/SpendLimitView';

const DebitCardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
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

  useEffect(() => {
    dispatch(DebitCardActions.getBalance());
    dispatch(DebitCardActions.getCardInfo());
    dispatch(DebitCardActions.getIsSpendLimit());
    dispatch(DebitCardActions.getSpendLimit());
    dispatch(DebitCardActions.getCurrentSpend());
  }, []);

  useEffect(() => {
    if (isFocused) {
      dispatch(DebitCardActions.getIsSpendLimit());
      dispatch(DebitCardActions.getSpendLimit());
      dispatch(DebitCardActions.getCurrentSpend());
    }
  }, [isFocused]);

  return (
    <Container showBackIcon={false}>
      <Balance balance={balance} />
      <SlideViewWithPanResponder>
        <View style={styles.cardContainer}>
          <DebitCardInfo cardInfo={cardInfo} />
          {isSpendLimit && (
            <SpendLimitView
              spendLimit={spendLimit}
              currentSpend={currentSpend}
            />
          )}
          <FunctionList
            isSpendLimit={isSpendLimit}
            onSwitchPress={(item: CardFunction) => {
              if (item.id == FUNCTION_ID.WEEK_SPEND_LIMIT) {
                if (item.isToggle) {
                  dispatch(DebitCardActions.setIsSpendLimit(false));
                } else {
                  navigation.navigate(Routers.SpendingLimitScreen);
                }
              }
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
    marginHorizontal: -Styles.Spacing.xlarge,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginTop: 50,
    height: '100%',
  },
});

export default DebitCardScreen;
