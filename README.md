## Description

This repository contains a simple project that allows you to observe a list of superheroes and add new ones. Frontend is built with React and backend is built with NestJS. The project uses a simple in-memory database to store the data.

## API

### Project setup

Navigate to the api directory with the following command:
```bash
$ cd api
```

Install the dependencies with the following command:
```bash
$ npm install
```

After installing the dependencies, you can run the project with the following command:

```bash
$ npm run start:dev
```

### Running unit tests
```bash
$ npm run test
```

## Frontend

Navigate to the front directory:
```bash
$ cd front
```
Install the dependencies with the following command:
```bash
$ npm install
```
After installing the dependencies, you can run the project with the following command:

```bash
$ npm run dev
```

## Things that could have been done by my team:
- Switch the in-memory database to a real database like PostgreSQL or MongoDB.
- Add more features to the project like updating and deleting superheroes.
- Add OpenAPI documentation to the project.
- Implement response formatting using class-validator to ensure that we are sending as little data as possible to the client.
- Add translation engine to the project to support multiple languages.

## If I had more time, I would:
- Cover API in e2e tests.
- Would ask for more details about the requirements and reasons behind them.
- Would ask for end vision of this app to be able to choose the suitable technologies and architecture.
- Add image upload functionality to the project.
- Add live updates to the frontend using WebSockets.
- Would create a docker-compose file to run the project and its dependencies in a containerized environment.
- Would add a CI/CD pipeline to the project to automate the deployment process.
- Would add a logger to the project to log all the requests and responses for easier future debugging.
- Add a caching layer to the project to reduce the number of requests to the database.
- Would make frontend prettier and more user-friendly. 
