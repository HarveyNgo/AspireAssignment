import {Colors, Styles} from '@common';
import {CurrencyCard, Text} from '@components';
import {IInputValidation} from '@models/debitCard';
import {FormikErrors, FormikTouched, getIn} from 'formik';
import React, {useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type InputViewProps = {
  handleChange: Function;
  values: IInputValidation;
  errors: FormikErrors<IInputValidation>;
  touched: FormikTouched<IInputValidation>;
  onChangeValue: (value: string) => void;
  currency: string;
};
const InputView: React.FC<InputViewProps> = ({
  handleChange,
  values,
  errors,
  touched,
  onChangeValue,
  currency,
}) => {
  const fieldValue = getIn(values, 'spendLimitAmount');

  useEffect(() => {
    onChangeValue(fieldValue);
  }, [fieldValue]);

  return (
    <View>
      <View style={styles.inputContainer}>
        <CurrencyCard currency={currency} />
        <View>
          <TextInput
            onChangeText={handleChange('spendLimitAmount')}
            value={String(values.spendLimitAmount)}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>
      </View>
      <Text style={styles.error}>
        {touched.spendLimitAmount && errors.spendLimitAmount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: Styles.FontSize.medium,
    fontWeight: 'bold',
    marginStart: 5,
    width: 100,
    color: Colors.black,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  error: {color: Colors.red},
});

export default InputView;
