import { render, screen } from '@testing-library/react';
import { PostCardImage } from './PostCardImage';

describe('PostCardImage', () => {
  const src = '/test.jpg';
  const alt = 'Test Image';

  test('renders image with correct src and alt', () => {
    render(<PostCardImage src={src} alt={alt} />);
    const image = screen.getByAltText(alt);
    expect(image).toBeInTheDocument();
  });
});
