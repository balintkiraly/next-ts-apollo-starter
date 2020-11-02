import React from 'react'
import Head from 'next/head'
import { Box, Grid, Heading } from '@chakra-ui/core'
import { useCharactersListQuery } from '@graphql/character/list-query.generated'
import { CharacterCard } from '@components/character/card'

export default function Home() {
  const { data, loading, error } = useCharactersListQuery()

  if (loading) {
    return <Heading>Loading...</Heading>
  }

  if (error) {
    return <Heading>Something went wrong</Heading>
  }

  return (
    <>
      <Head>
        <title>GraphQL Example</title>
      </Head>
      <Box m={5}>
        <Heading my={4}>Rick and Morty characters</Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {data.characters.results.map((character) => (
            <CharacterCard name={character.name} image={character.image} key={character.id} />
          ))}
        </Grid>
      </Box>
    </>
  )
}
