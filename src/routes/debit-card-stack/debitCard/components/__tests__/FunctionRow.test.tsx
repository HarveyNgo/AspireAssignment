import {TopupIcon} from '@assets/icons';
import {FUNCTION_ID} from '@constants/debitCard';
import React from 'react';
import renderer from 'react-test-renderer';
import FunctionRow from '../FunctionRow';

const data = {
  id: FUNCTION_ID.TOP_UP,
  name: 'Top-up account',
  description: 'deposit money to your account to use with card',
  isShowToggle: false,
  isToggle: false,
  icon: TopupIcon,
};

test('renders correctly', () => {
  const tree = renderer.create(<FunctionRow item={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
