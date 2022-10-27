import React from 'react';
import renderer from 'react-test-renderer';
import {SlideViewWithPanResponder} from '@components';

test('renders correctly', () => {
  const tree = renderer
    .create(<SlideViewWithPanResponder children={undefined} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
