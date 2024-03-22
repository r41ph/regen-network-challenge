import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  const text = 'Click me';
  const className = 'custom-class';
  const to = '/test';

  test('renders button with correct text and class', () => {
    render(<Button text={text} className={className} to={to} />);
    const button = screen.getByText(text);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(className);
  });

  test('renders button with correct href', () => {
    render(<Button text={text} className={className} to={to} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', to);
  });
});
