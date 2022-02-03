import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import SelectComponent from './SelectComponent';

it('onChange', () => {
  const { queryByTitle } = render(<SelectComponent />);
  const input = queryByTitle('check');
  fireEvent.change(input, { target: { value: '1' } });
  expect(input.value).toBe('1');
});

it('should correctly display the correct number of options', () => {
  render(<SelectComponent />);
  expect(screen.getAllByRole('option').length).toBe(6);
});
