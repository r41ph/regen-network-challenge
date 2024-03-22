import { Post } from '@/types/post';
import Link from 'next/link';
import { Button } from '../button/button';

export function PostCardContent({ post }: { post: Post }) {
  return (
    <div className="flex flex-col place-items-start p-3">
      <h1 className="mb-3 text-2xl font-bold">{post.title}</h1>
      <p className="line-clamp-2 text-base">{post.comment}</p>
      <Button
        text="Read More"
        className="mt-8 block self-end hover:opacity-75"
        to={`/post/${post.id}`}
      />
    </div>
  );
}
