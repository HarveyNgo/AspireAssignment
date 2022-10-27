import React from 'react';
import renderer from 'react-test-renderer';
import {CurrencyCard} from '@components';

test('renders correctly', () => {
  const tree = renderer.create(<CurrencyCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
