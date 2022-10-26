import React from 'react';
import renderer from 'react-test-renderer';
import {Title} from '@components';

test('renders correctly', () => {
  const tree = renderer.create(<Title title={''} />).toJSON();
  expect(tree).toMatchSnapshot();
});
