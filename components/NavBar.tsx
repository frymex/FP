'use client'

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  Image,
  Center,
  ChakraProvider,
  HStack,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const Links = ['Функции', 'Цены', 'Поддержка']

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'full'}
      bg={useColorModeValue('gray.200', 'gray.700')}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.400', 'gray.900'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Nav() {
  // const { colorMode, toggleColorMode } = useColorMode()
  // console.log(colorMode)
  return (
      <Box py={{ base: 10, md: 15 }} px={4} as="nav" ml="auto" mr="auto" maxWidth="80%">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image 
                  onClick={() => {document.location.href='/'}}
                  style={{cursor: 'pointer'}}
                  w={{ base: 90, md:  120}}
                  h={{ base: 'auto', md: 'auto' }}
                  src='images/png/stormspam.png'
                  fallbackSrc='https://cdn.discordapp.com/attachments/1078411940084338774/1161047564796309515/StormSpam.png?ex=6536e0ce&is=65246bce&hm=06d821b6456e41a8584cc212eda40e3f34e7c615d781929c62d273d5740f224f&' alt=''/>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button backgroundColor='yellow.400'
              color={'black'}
              onClick={() => {document.location.href='/login/'}}
              _hover={{ 'backgroundColor': 'yellow.600', color: 'white' }}
               fontWeight={600} rounded={'lg'}>
                Личный кабинет
                </Button>
              {/* <Button colorScheme='blue' rounded={'full'} fontWeight={600}>Get started</Button> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
  )
}