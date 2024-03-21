import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { projectById } from './queries';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      projectById,
    },
  }),
});

export default schema;
