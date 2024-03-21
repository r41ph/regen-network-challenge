import express from 'express';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';

import schema from './graphql/schema';
import projects from './routes/projects';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use('/projects', projects);

app.all(
  '/graphql',
  createHandler({
    schema,
  }),
);

app.listen(port);
