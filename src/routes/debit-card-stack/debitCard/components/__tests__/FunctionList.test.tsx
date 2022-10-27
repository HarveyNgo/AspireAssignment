import {CardFunction} from '@models/debitCard';
import React from 'react';
import renderer from 'react-test-renderer';
import FunctionList from '../FunctionList';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <FunctionList
        onSwitchPress={function (item: CardFunction): void {
          throw new Error('Function not implemented.');
        }}
        isSpendLimit={false}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
