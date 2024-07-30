## Installation

```bash
$ npm install
```

## Environment

```bash
$ create .env
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

```
## Deploy

```bash
# local containers
$ docker compose up -d

# run migrations
$ npx prisma migrate dev

# run seed
$ npx prisma db seed

```
