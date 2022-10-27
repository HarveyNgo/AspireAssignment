import React from 'react';
import renderer from 'react-test-renderer';

import SaveButton from '../SaveButton';

test('renders correctly', () => {
  const tree = renderer
    .create(<SaveButton haveSpendAmount={false} onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
