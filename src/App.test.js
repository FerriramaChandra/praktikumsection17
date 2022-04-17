import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pendaftaran Peserta Coding Bootcamp/i);
  expect(linkElement).toBeInTheDocument();
});
