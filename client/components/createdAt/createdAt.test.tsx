import { render, screen } from '@testing-library/react';
import { CreatedAt } from './createdAt';

describe('CreatedAt', () => {
  test('renders the formatted date', () => {
    const timestamp = '1634567890000';
    render(<CreatedAt timestamp={timestamp} />);
    const formattedDate = screen.getByText('10/18/2021');
    expect(formattedDate).toBeInTheDocument();
  });
});
