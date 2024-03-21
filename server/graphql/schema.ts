import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { projectById, postsByProjectId, postById } from './queries';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      projectById,
      postsByProjectId,
      postById,
    },
  }),
});

export default schema;
