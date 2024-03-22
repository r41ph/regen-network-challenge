# Data Stream Full-stack Code Challenge

## Client

Install dependencies:

```sh
yarn install
```

Run app locally on http://localhost:3000:

```sh
yarn dev
```

## Server

Install dependencies:

```sh
yarn install
```

Initialize PostgreSQL database with docker:

```sh
docker-compose up
``````

Run initial migrations and seed database:

```sh
. ./.env.local
yarn init-db
```

Run app locally on http://localhost:5000:

```sh
yarn dev
```

## Project details

The frontend has been built with Next.js and instead of completing the optional backend task, I have implemented GraphQL for the API. You'll see that I have implemented a few unit test too, a bit of styling using TailwindCSS, pagination for the posts and a responsive layout. On top of these, I have updated the seed.sql file to have a bit more post details for the UI.

In the backend, you'll find that I have updated some dependencies to fix (at least it wasn't working for me) Prettier and ESLint as well as done some refactoring to adapt it to the GraphQL implemntation.

Additionally, in a real life work project, more test should be implemented, more reusable components could be created and the respository should probably be a monorepo, among other things. 

Please do not hesitate to get in touch in case you encounter any issues running the project.