import { render } from '@testing-library/react';

import PackagesReact from './PackagesReact';

describe('PackagesReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesReact />);
    expect(baseElement).toBeTruthy();
  });
});
