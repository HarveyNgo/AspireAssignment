import {Colors, Styles} from '@common';
import {Container, Text, Title} from '@components';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {DebitCardActions} from '@store/actions';
import * as yup from 'yup';
import InputHeader from './components/InputHeader';
import InputView from './components/InputView';
import SaveButton from './components/SaveButton';
import SpendLimitList from './components/SuggestionList';
import {DebitCardSelectors} from '@store/selectors';

const SpendingLimitScreen = () => {
  const [spendLimitAmount, setSpendLimitAmount] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currency = useSelector(DebitCardSelectors.getCurrency, shallowEqual);

  useEffect(() => {
    dispatch(DebitCardActions.getCurrency());
  }, []);

  const onSubmit = (amount: number) => {
    dispatch(
      DebitCardActions.saveSpendLimit(amount, {
        callbackSuccess: () => {
          dispatch(DebitCardActions.setIsSpendLimit(true));
          navigation.goBack();
        },
      }),
    );
  };
  return (
    <Container>
      <Title title={'Spending Limit'} style={styles.spendLimitTitle} />
      <KeyboardAvoidingView style={styles.container}>
        <Formik
          initialValues={{
            spendLimitAmount: spendLimitAmount,
          }}
          enableReinitialize={true}
          onSubmit={values => {
            onSubmit(values.spendLimitAmount);
          }}
          validationSchema={yup.object().shape({
            spendLimitAmount: yup
              .number()
              .moreThan(0, 'must be greater than 0')
              .required('this field is require'),
          })}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <>
              <View style={styles.subContainer}>
                <InputHeader />
                <InputView
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                  onChangeValue={value => setSpendLimitAmount(Number(value))}
                  currency={currency}
                />
                <View style={styles.seperator} />
                <Text style={styles.explaination}>
                  Here weekly means the last 7 days - not the calendar week
                </Text>
                <SpendLimitList
                  currency={currency}
                  onPress={spendLimitItem => {
                    setSpendLimitAmount(spendLimitItem.number);
                  }}
                />
              </View>
              <View style={styles.saveButtonContainer}>
                <SaveButton
                  haveSpendAmount={spendLimitAmount > 0}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.white,
    marginTop: 50,
    height: 100,
    paddingHorizontal: 20,
    marginHorizontal: -Styles.Spacing.xlarge,
    flex: 1,
  },
  subContainer: {flex: 1},
  saveButtonContainer: {
    alignSelf: 'center',
    width: '70%',
    marginBottom: Styles.Spacing.medium,
  },
  seperator: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: Colors.deactive,
    marginBottom: 10,
  },
  explaination: {color: Colors.gray, fontSize: 11, marginBottom: 20},
  spendLimitTitle: {marginTop: Styles.Spacing.large},
});

export default SpendingLimitScreen;
