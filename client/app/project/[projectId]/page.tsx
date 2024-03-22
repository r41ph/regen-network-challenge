import { Heading } from '@/components/heading/heading';
import { PostCard } from '@/components/postCard/postCard';
import { Post } from '@/types/post';
import { fetchPostsAndProjectById } from '@/utils/api';

export default async function Project({
  params,
}: {
  params: { projectId: string };
}) {
  const data = await fetchPostsAndProjectById(params.projectId).then(
    (data) => data,
  );
  const posts = data?.postsByProjectId;
  const project = data?.projectById;

  return (
    <>
      <Heading text={project.name} />
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post: Post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}
