import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PreviewCartButton from './PreviewCartButton';

it('checkButtonRender', () => {
  const { queryByTitle } = render(<PreviewCartButton />);
  const btn = queryByTitle('check');
  expect(btn).toBeTruthy();
});

describe('clickButton', () => {
  it('onClick', () => {
    const { queryByTitle } = render(<PreviewCartButton />);
    const btn = queryByTitle('check');
    expect(btn.innerHTML).toBe('select all to view cart');
    fireEvent.click(btn);
  });
});
