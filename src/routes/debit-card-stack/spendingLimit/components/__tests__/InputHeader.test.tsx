import React from 'react';
import renderer from 'react-test-renderer';

import InputHeader from '../InputHeader';

test('renders correctly', () => {
  const tree = renderer.create(<InputHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
