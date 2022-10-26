import {CurrencyCard, Text} from '@components';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {FormikErrors, FormikTouched} from 'formik';
import {IInputValidation} from '@models/debitCard';
import {Colors, Styles} from '@common';
import {err} from 'react-native-svg/lib/typescript/xml';

type InputViewProps = {
  handleChange: Function;
  values: IInputValidation;
  errors: FormikErrors<IInputValidation>;
  touched: FormikTouched<IInputValidation>;
  spendLimitAmount: number;
};
const InputView: React.FC<InputViewProps> = ({
  handleChange,
  values,
  errors,
  touched,
  spendLimitAmount,
}) => {
  // const [aa, setAA] = useState(false);
  // useEffect(() => {
  //   setAA(true);
  //   console.log('hung spendLimitAmount spendLimitAmount:', spendLimitAmount);
  // }, [spendLimitAmount]);
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
