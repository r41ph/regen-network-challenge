import axios from "axios";

export const api = axios.create({
  baseURL: process.env.PROD
    ? ""
    : "http://localhost:5000",
  proxy: false,
  headers: {
    "Content-Type": "application/json",
  }
});

export async function fetchPostsAndProjectById(projectId: string, limit: string = "9", offset: string = "0") {
  const query = `
    query {
      postsByProjectId(projectId: "${projectId}", limit: "${limit}", offset: "${offset}") {
        id
        project_id
        title
        img
        comment
        created_at
      }
      projectById(projectId: "${projectId}") {
        id
        name
        created_at
      }
    }
  `;
  const response = await api.post('/graphql', { query });
  return response.data.data;
}


export async function fetchPostById(postId: string) {
  const query = `
    query {
      postById(postId: "${postId}") {
        id
        project_id
        title
        img
        comment
        created_at
      }
    }
  `;
  const response = await api.post('/graphql', { query });
  return response.data.data;
}