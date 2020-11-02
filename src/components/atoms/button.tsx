import React from 'react'
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/core'

export const Button = ({ children, ...props }: ChakraButtonProps) => (
  <ChakraButton {...props}>{children}</ChakraButton>
)
