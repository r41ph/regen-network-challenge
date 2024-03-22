import { render, screen } from '@testing-library/react';
import { PostCardContent } from './PostCardContent';
import { Post } from '@/types/post';

describe('PostCardContent', () => {
  const post: Post = {
    id: '1',
    title: 'Test Post',
    project_id: '1',
    created_at: new Date(),
    img: 'test.jpg',
    comment: 'This is a test post',
  };

  test('renders post title and comment', () => {
    render(<PostCardContent post={post} />);
    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.comment)).toBeInTheDocument();
  });

  test('renders "Read More" link with correct href', () => {
    render(<PostCardContent post={post} />);
    const readMoreLink = screen.getByText('Read More');
    expect(readMoreLink).toBeInTheDocument();
    expect(readMoreLink.getAttribute('href')).toBe(`/post/${post.id}`);
  });
});
