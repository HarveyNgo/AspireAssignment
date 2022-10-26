import React from 'react';
import renderer from 'react-test-renderer';
import {Container} from '@components';

test('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('renders correctly with style', () => {
//   const tree = renderer.create(<Container showLoader={false} />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
