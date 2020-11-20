import React from 'react'
import { render } from '@testing-library/react';
import Home from './Home';

test('renders Home page was correctly', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});