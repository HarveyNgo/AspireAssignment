import {Colors} from '@common';
import {Container, Text, Title} from '@components';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {DebitCardActions} from 'src/store/actions';
import * as yup from 'yup';
import InputHeader from './components/InputHeader';
import InputView from './components/InputView';
import SaveButton from './components/SaveButton';
import SpendLimitList from './components/SuggestionList';

const SpendingLimitScreen = () => {
  const [spendLimitAmount, setSpendLimitAmount] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
      <Title title={'Spending Limit'} />
      <View style={styles.functionContainer}>
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
              <View style={{height: '85%'}}>
                <InputHeader />
                <InputView
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                  onChangeValue={value => setSpendLimitAmount(Number(value))}
                />
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
                  haveSpendAmount={spendLimitAmount > 0}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  functionContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.white,
    marginTop: 50,
    paddingHorizontal: 20,
    marginHorizontal: -18,
    height: '90%',
  },

  saveButtonContainer: {
    alignSelf: 'center',
    width: '60%',
  },
  seperator: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.deactive,
    marginBottom: 10,
  },
  explaination: {color: 'grey', fontSize: 11, marginBottom: 20},
});

export default SpendingLimitScreen;
