import React from 'react'
import { Box, Image } from '@chakra-ui/core'

export interface CharacterCardProps {
  name: string
  image: string
}

export const CharacterCard = ({ image, name }: CharacterCardProps) => (
  <Box maxW="400px" borderWidth="1px" rounded="lg">
    <Image src={image} roundedTop="lg" />

    <Box textAlign="center" fontWeight="bold" p={3}>
      {name}
    </Box>
  </Box>
)
