
import React from 'react'
import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { Box, Image, Grid, Heading } from '@chakra-ui/core'

import QUERY from '../graphql/exampleQuery.graphql'

export default function Home() {
  const { data, loading, error } = useQuery(QUERY)
  
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
            <Box  maxW="sm" borderWidth="1px" rounded="lg"  key={character.id}>
              <Image src={character.image} />

              <Box textAlign="center" fontWeight="bold" p={3}>
                {character.name}
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  )
}