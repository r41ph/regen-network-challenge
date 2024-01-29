import express from 'express';

import projects from './routes/projects';

const app = express();
const port = process.env.PORT || 5000;

app.use('/projects', projects);
app.listen(port);