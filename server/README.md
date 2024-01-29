# Server

Install dependencies:

```sh
yarn install
```

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
