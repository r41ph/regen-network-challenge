'use client';

import React, { useState, useEffect } from 'react';
import { Heading } from '@/components/heading/heading';
import { PostCard } from '@/components/postCard/postCard';
import { Post } from '@/types/post';
import { Project } from '@/types/project';
import { fetchPostsAndProjectById } from '@/utils/api';

export default function Project({ params }: { params: { projectId: string } }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const limit = '9';
      const offset = ((currentPage - 1) * Number(limit)).toString();
      const data = await fetchPostsAndProjectById(
        params.projectId,
        limit,
        offset,
      );
      setPosts(data?.postsByProjectId);
      setProject(data?.projectById);
    };

    fetchPosts();
  }, [currentPage, params.projectId]);

  const handleNext = () => {
    setCurrentPage((page) => page + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  return (
    <>
      {project && <Heading text={project?.name} />}
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post: Post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
      <div className="flex justify-center pt-8">
        <button
          className={`${currentPage === 1 ? '' : 'hover:underline hover:opacity-70'}`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="pl-8 hover:underline hover:opacity-70"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
}
