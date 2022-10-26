import React from 'react';
import renderer from 'react-test-renderer';
import SpendLimitView from '../SpendLimitView';

test('renders correctly', () => {
  const tree = renderer
    .create(<SpendLimitView spendLimit={0} currentSpend={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
