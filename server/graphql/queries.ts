import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import { getProjectById } from '../database/projectsData';

export const projectById = {
  type: new GraphQLObjectType({
    name: 'ProjectByIdData',
    fields: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      createdAt: { type: GraphQLString },
    },
  }),
  args: {
    projectId: { type: GraphQLString },
  },
  resolve: async (_, args) => getProjectById(args.projectId),
};
