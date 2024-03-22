import { PostCardImage } from './PostCardImage';
import { PostCardContent } from './PostCardContent';
import { Post } from '@/types/post';

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex w-full flex-col bg-white">
      <PostCardImage src={post.img} alt={post.title} />
      <PostCardContent post={post} />
    </div>
  );
}
