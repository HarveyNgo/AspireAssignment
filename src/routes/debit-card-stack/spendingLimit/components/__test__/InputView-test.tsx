import React from 'react';
import renderer from 'react-test-renderer';

import InputView from '../InputView';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <InputView
        handleChange={undefined}
        values={undefined}
        errors={undefined}
        touched={undefined}
        onChangeValue={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
