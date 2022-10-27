import React from 'react';
import renderer from 'react-test-renderer';
import {FormikErrors, FormikTouched, getIn} from 'formik';
import InputView from '../InputView';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <InputView
        handleChange={() => {}}
        values={{spendLimitAmount: 0}}
        errors={{} as any}
        touched={{} as any}
        onChangeValue={(value: string) => {}}
        currency={''}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
