import {Colors} from '@common';
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
};
const InputView: React.FC<InputViewProps> = ({
  handleChange,
  values,
  errors,
  touched,
  onChangeValue,
}) => {
  const fieldValue = getIn(values, 'spendLimitAmount');

  useEffect(() => {
    onChangeValue(fieldValue);
  }, [fieldValue]);

  return (
    <View>
      <View style={styles.inputContainer}>
        <CurrencyCard />
        <View>
          <TextInput
            onChangeText={handleChange('spendLimitAmount')}
            value={String(values.spendLimitAmount)}
            style={styles.input}
          />
        </View>
      </View>
      <Text style={{color: Colors.red}}>
        {touched.spendLimitAmount && errors.spendLimitAmount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    borderRadius: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    flex: 1,
    marginTop: 4,
    marginStart: 5,
    // backgroundColor: 'blue',
    width: 100,
  },

  inputContainer: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
});

export default InputView;
