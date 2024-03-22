import { Heading } from '../../../components/heading/heading';
import { Post } from '@/types/post';
import { fetchPostById } from '@/utils/api';
import Image from 'next/image';
import { CreatedAt } from '@/components/createdAt/createdAt';
import Link from 'next/link';

export default async function Post({ params }: { params: { postId: string } }) {
  const data = await fetchPostById(params.postId).then((data) => data);
  const post: Post = data?.postById;

  return (
    <>
      <Link
        href={`/project/${post.project_id}`}
        className="mb-6 block hover:underline hover:opacity-60"
      >
        Go back
      </Link>
      <div className="relative h-32 w-full md:h-64 lg:h-80">
        <Image
          src={post.img}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex items-center justify-between">
        <Heading text={post.title} />
        <CreatedAt timestamp={post.created_at} />
      </div>
      <p>{post.comment}</p>
    </>
  );
}
