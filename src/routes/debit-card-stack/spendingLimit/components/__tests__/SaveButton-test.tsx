import React from 'react';
import renderer from 'react-test-renderer';

import SaveButton from '../SaveButton';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <SaveButton
        haveSpendAmount={false}
        onPress={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
