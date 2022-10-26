import React from 'react';
import renderer from 'react-test-renderer';

import SuggestionItem from '../SuggestionItem';

test('renders correctly', () => {
  const tree = renderer.create(<SuggestionItem item={{} as any} />).toJSON();
  expect(tree).toMatchSnapshot();
});
