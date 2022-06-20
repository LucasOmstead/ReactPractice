import { render, screen } from '@testing-library/react';
//import App from './App';
import test1 from './test1.js';
//render(<App />)
render(<test1 x={5} y={6} />)
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
