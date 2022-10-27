import React from 'react';
import renderer from 'react-test-renderer';

import InputView from '../InputView';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <InputView
        handleChange={{} as any}
        values={{} as any}
        errors={{} as any}
        touched={{} as any}
        onChangeValue={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
