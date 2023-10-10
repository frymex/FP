'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcBinoculars,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcCommandLine,
  FcApproval,
  FcOnlineSupport,
  FcFlashOn
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  )
}

export default function gridListWith() {
  return (
    <Box>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Почему стоит выбрать нас?
        </Heading>
        {/* <Text color={'gray.400'} fontSize={{ base: 'sm', sm: 'lg' }}>
      Мы предлагаем вам самый современный и удобный спамер для Telegram.
      Наши сервера расположены в разных странах, что позволяет достигать полной{' '}
      <chakra.span color={'blue.500'}>анонимности</chakra.span>.
    </Text> */}
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Безопасность'}
            icon={<Icon as={FcApproval} w={10} h={10} />}
            description={'Мы не собираем и не сохраняем данные о вас. Обработка действий происходят на стороне клиента.'}
            href={'#'}
          />
          <Card
            heading={'Поддержка'}
            icon={<Icon as={FcOnlineSupport} w={10} h={10} />}
            description={'После покупки вы получаете гарантии поддержки и обновлений на срок вашей лицензии.'}
            href={'#'}
          />
          <Card
            heading={'Скорость'}
            icon={<Icon as={FcFlashOn} w={10} h={10} />}
            description={'Мы используем уникальные технологии, сообщения будут доставленны идеально!'}
            href={'#'}
          />
          {/* <Card
            heading={'Heading'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          /> */}
        </Flex>
      </Container>
    </Box>
  )
}