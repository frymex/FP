'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,
} from '@chakra-ui/react'


export default function Hero() {
  return (
    <Container maxW={'80%'}>
      <Stack
        align={'left'}
        textAlign={'left'}
        pl={'15px'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 19, md: 24 }}>
        <Heading
          fontWeight={800}
          // color={"gray.700"}
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
          lineHeight={'110%'}
          maxW={'500px'}>
          Sign up as a black cab driver with Gett
        </Heading>
        
        <Text 
          fontSize={{ base: '24', sm: '2xl', md: '3xl' }}
          lineHeight={'110%'}
          // color={"#253238"}
          whiteSpace={'pre-line'} maxW={'600px'}>
          Increase your earnings, work when you want to, and get access to lucrative corporate jobs.
        </Text>
      </Stack>
    </Container>
  )
}