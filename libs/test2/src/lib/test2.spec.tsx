import React from 'react';
import { render } from '@testing-library/react';

import Test2 from './test2';

describe(' Test2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Test2 />);
    expect(baseElement).toBeTruthy();
  });
});
