import React from 'react';
import { render } from '@testing-library/react';

import Test1 from './test1';

describe(' Test1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Test1 />);
    expect(baseElement).toBeTruthy();
  });
});
