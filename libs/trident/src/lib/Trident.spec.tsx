import { render } from '@testing-library/react';

import Trident from './Trident';

describe('Trident', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Trident />);
    expect(baseElement).toBeTruthy();
  });
});
