## Micro Front End App

You are requested to create a micro frontend app that will consist of two screens:

- Login/Signup
- Main Dashboard

For the login/signup screen, you can use Google as the provider, and for your storing users, you can use Firebase.

Inside the dashboard, you should show a table of products with search functionality for the title and a filter (toggle) to show featured products.

For fetching and caching data, you should use React Query, and for the table itself, you should use React Table from the same author.

For the styling, you are free to use the flavor of your choice.

We provide you with a large dataset of products that you can use. You have a few options for storing the data:

1. Create a NextJS app, store the CSV in the file system and load it from an endpoint of `/products` that you can create inside the `api` folder.
2. Create a Nodejs app with a database of your choice, and create an endpoint that exposes this dataset (not recommended)
3. (/) Import the whole dataset in a Firebase table of `products`

For the whole assessment, we need to see a few concepts to consider it complete:

1. At least one use of React hooks
2. At least one use of Context API
3. At least one use of fetch API with the appropriate try-catch block
4. At least one use of unit tests
5. Use of TypeScript will be considered a plus

Also, it needs to perform well.

At the end of the assessment please provide us with a live link to test, and a link to the repository of the project. For deployment you can use Vercel for that.

There is no script deadline but ideally we would like to have the assessment by the end of this week.

### Notes on the solution

Task list:

### Environment

---

This project was built using:

- yarn
- nvm
- Node v16.15.0
- Jest
- Typescript
- VSCode
- docker
- docker-compose
- React

### To link the shared libs locally

---

```
cd ../libs/shared
yarn link
```

run `yarn link "@todo-app/shared-types` to import to the desired project

### To build locally

---

1. install docker

#### Make a mongodb available

```
docker-compose up
```

#### Web-App:

```
nvm use
```

```
yarn
```

```
yarn start
```

### To run test suite:

---

web-app:

```
nvm use

yarn

yarn test
```

### Potential improvements and notes


### Notes on the task

---
