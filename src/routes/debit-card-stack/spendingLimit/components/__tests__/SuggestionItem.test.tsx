import React from 'react';
import renderer from 'react-test-renderer';

import SuggestionItem from '../SuggestionItem';

test('renders correctly', () => {
  const tree = renderer
    .create(<SuggestionItem item={{id: 1, number: 10}} currency={''} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
