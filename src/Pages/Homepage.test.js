import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

test('Existe News', () => {
  render(<Homepage />);

  const linkElement = screen.getByText(/Geen gegevens beschikbaar voor dit veld./i);
  expect(linkElement).toBeInTheDocument();

});
