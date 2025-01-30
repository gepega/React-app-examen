import { render, screen } from '@testing-library/react';
import FieldDetailpage from './FieldDetailpage';

test('Existe News', () => {
  render(<FieldDetailpage />);

  const linkElement = screen.getByText(/Nieuws en updates/i);
  expect(linkElement).toBeInTheDocument();

});
