import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {
  getPostById,
  getPostsByProjectId,
  getProjectById,
} from '../database/projectsData';

export const projectById = {
  type: new GraphQLObjectType({
    name: 'ProjectByIdData',
    fields: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      created_at: { type: GraphQLString },
    },
  }),
  args: {
    projectId: { type: GraphQLString },
  },
  resolve: async (_, { projectId }) => {
    try {
      return await getProjectById(projectId);
    } catch (e) {
      if (e.message === 'Project not found') {
        throw new Error(e.message);
      } else {
        throw e;
      }
    }
  },
};

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: GraphQLID },
    project_id: { type: GraphQLString },
    title: { type: GraphQLString },
    comment: { type: GraphQLString },
    created_at: { type: GraphQLString },
  },
});
const PostByProjectIdType = new GraphQLList(PostType);

export const postsByProjectId = {
  type: PostByProjectIdType,
  args: {
    projectId: { type: GraphQLString },
    limit: { type: GraphQLString },
    offset: { type: GraphQLString },
  },
  resolve: async (_, { projectId, limit, offset }) => {
    try {
      return await getPostsByProjectId(projectId, limit, offset);
    } catch (e) {
      if (e.message === 'Posts not found') {
        throw new Error(e.message);
      } else {
        throw e;
      }
    }
  },
};

export const postById = {
  type: PostType,
  args: {
    postId: { type: GraphQLString },
  },
  resolve: async (_, { postId }) => {
    try {
      return await getPostById(postId);
    } catch (e) {
      if (e.message === 'Post not found') {
        throw new Error(e.message);
      } else {
        throw e;
      }
    }
  },
};
