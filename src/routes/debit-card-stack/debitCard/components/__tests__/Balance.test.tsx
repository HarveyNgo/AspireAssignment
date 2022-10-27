import React from 'react';
import renderer from 'react-test-renderer';

import Balance from '../Balance';

test('renders correctly', () => {
  const tree = renderer.create(<Balance balance={0} currency={''} />).toJSON();
  expect(tree).toMatchSnapshot();
});
