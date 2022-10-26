import {CardFunction} from '@models/debitCard';
import React from 'react';
import renderer from 'react-test-renderer';
import FunctionRow from '../FunctionRow';

test('renders correctly', () => {
  const tree = renderer
    .create(<FunctionRow item={{} as CardFunction} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
