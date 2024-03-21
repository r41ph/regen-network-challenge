import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { projectById, postsByProjectId } from './queries';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      projectById,
      postsByProjectId,
    },
  }),
});

export default schema;
