# CareApp | Retirement Patient Management Software

## To Run Locally

* Clone the repo locally, and change into the working directory

```sh
git clone https://github.com/alexpppp/careApp.git
cd careApp
```

* Install dependencies, run migrations, run seeds, and make a working copy of the auth key.

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

* Access the site at http://localhost:3000/#/

### Register a new user, and start managing patients. Enjoy!
