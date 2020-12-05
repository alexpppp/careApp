# CareApp | Retirement Patient Management Software

## To Run Locally

* Install dependencies, run migrations, and run seeds.

```sh
npm install
npx knex migrate:latest
npx knex seed:run
cp .env.example .env
```

* To run in development:
```sh
npm run dev
```
...and wait 5-10s for webpack to build.

### Register a new user, and start managing patients. Enjoy!
