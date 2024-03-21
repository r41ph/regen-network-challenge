import pool from './dbPool';
import { PoolClient } from 'pg';

export async function getProjectById(projectId: string) {
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
        createdAt: projectQuery.rows[0].created_at,
      };
    } else {
      throw new Error('Project not found');
    }
  } finally {
    if (client) client.release();
  }
}
