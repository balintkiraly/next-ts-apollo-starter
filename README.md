# NextJS with TypeScript and ApolloClient
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/balintkiraly/next-ts-apollo-starter
```

### 2. Install the dependencies
```bash
yarn install
```
> The generator script will run automaticly after the install

### 3. Run the development server

```bash
yarn dev
```
### 4. Open the application
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## How to create a new Query/Mutation
### 1. Write the query/mutation
- Create a new file in the `src/graphql` folder with `.graphql` extension.
- Simply write your query/mutation in the file

Always use a name like in the example
```GraphQL
query CharactersList {
  ...
}
```

### 2. Run the codegen script
```
yarn generate
```
It will create a new file next to your graphql file with `.generated.ts` extension.

### 3. Use it
You can simpli import the hook from the generated file.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
