import { Post } from '../types/post';
import { Project } from '../types/project';
import pool from './dbPool';
import { PoolClient } from 'pg';

export async function getProjectById(projectId: string): Promise<Project> {
  let client: PoolClient;
  try {
    client = await pool.connect();

    const projectQuery = await client.query(
      'SELECT * FROM project WHERE id = $1',
      [projectId],
    );

    if (projectQuery.rows.length) {
      return {
        id: projectQuery.rows[0].id,
        name: projectQuery.rows[0].name,
        created_at: projectQuery.rows[0].created_at,
      };
    } else {
      throw new Error('Project not found');
    }
  } finally {
    if (client) client.release();
  }
}

export async function getPostsByProjectId(
  projectId: string,
  limit: string,
  offset: string,
): Promise<Post[]> {
  let client: PoolClient;
  try {
    client = await pool.connect();

    const postsQuery = await client.query(
      'SELECT * FROM post WHERE project_id = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3',
      [projectId, limit, offset],
    );

    if (postsQuery.rows.length) {
      const posts = postsQuery.rows.map((post: Post) => ({
        id: post.id,
        project_id: post.project_id,
        title: post.title,
        comment: post.comment,
        created_at: post.created_at,
      }));
      return posts;
    } else {
      throw new Error('Posts not found');
    }
  } finally {
    if (client) client.release();
  }
}
