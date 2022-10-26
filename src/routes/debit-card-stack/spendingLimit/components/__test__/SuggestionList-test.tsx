import React from 'react';
import renderer from 'react-test-renderer';
import SuggestionList from '../SuggestionList';

test('renders correctly', () => {
  const tree = renderer.create(<SuggestionList />).toJSON();
  expect(tree).toMatchSnapshot();
});
