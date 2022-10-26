import {CardFunction} from '@models/debitCard';
import React from 'react';
import renderer from 'react-test-renderer';
import FunctionRow from '../FunctionRow';
import SpendLimitProgress from '../SpendLimitProgress';

test('renders correctly', () => {
  const tree = renderer
    .create(<SpendLimitProgress currentSpend={0} spendLimit={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
