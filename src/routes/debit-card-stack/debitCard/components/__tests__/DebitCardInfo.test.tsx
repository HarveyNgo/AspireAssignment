import {CardInfo} from '@models/debitCard';
import React from 'react';
import renderer from 'react-test-renderer';
import DebitCardInfo from '../DebitCardInfo';

test('renders correctly', () => {
  const tree = renderer
    .create(<DebitCardInfo cardInfo={{} as CardInfo} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
