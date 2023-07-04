import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

test('renders "Hello, World!" text', () => {
  render(<HelloWorld />);
  const helloWorldText = screen.getByText(/Hello, World!/i);
  expect(helloWorldText).toBeInTheDocument();
});