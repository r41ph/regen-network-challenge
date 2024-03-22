import { render, screen } from '@testing-library/react';
import { Heading } from './heading';

describe('Heading', () => {
  const text = 'Test Heading';

  test('renders heading with correct text', () => {
    render(<Heading text={text} />);
    const heading = screen.getByText(text);
    expect(heading).toBeInTheDocument();
  });
});
