import React from 'react';

import { render, cleanup } from '@testing-library/react';

import RightPanel from '../rightPanel';

afterEach(cleanup);

it('renders title Spacestagram', () => {
  const { getByText } = render(<RightPanel />);
  expect(getByText('Spacestagram')).toBeInTheDocument();
});