# Phonebook Rest API


Rest api for phonebook


## Requirements

 - [Node v10>=](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)
 - [NPM](https://www.npmjs.com/get-npm)

## Getting Started

#### Clone the repo and make it yours:

```bash
git clone --depth 1 https://github.com/shiva2492/phone-book.git
cd phone-book
```

#### Install dependencies:

```bash
npm i
```

#### Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
npm dev
```

## Running in Production

```bash
npm start
```

## Lint

```bash
# lint code with ESLint
npm lint

# try to fix ESLint errors
npm lint:fix

# lint and watch for changes
npm lint:watch
```

## Test

```bash
# run all tests with Jest and creates coverage report
npm test

# run unit tests
npm test:unit

# run integration tests
npm test:integration

# run all tests and watch for changes
npm test:watch

```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation with sample request 
npm docs
```

## Docker

```bash
# run container locally
yarn docker:dev

# run container in production
yarn docker:prod

# run tests
yarn docker:test
```

## Deploy

Set your server ip:

```bash
DEPLOY_SERVER=127.0.0.1
```

Replace my Docker username with yours:

```bash
nano deploy.sh
```

Run deploy script:

```bash
yarn deploy
```
