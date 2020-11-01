module.exports = {
  schema: [
    {
      'https://rickandmortyapi.com/graphql': {},
    },
  ],
  documents: ['src/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/types.generated.ts': {
      plugins: [
        'typescript'
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
    './src': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: './src/generated/types.generated.ts'
      },
      plugins: [
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    }
  },
}
