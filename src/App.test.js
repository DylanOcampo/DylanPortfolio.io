import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/Hi, I'm Dylan/i);
  expect(heading).toBeInTheDocument();
});
