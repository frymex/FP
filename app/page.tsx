"use client"

import Line from "@/components/Line"
import Prices from "@/components/Prices"
// import { Link } from "@chakra-ui/next-js"
import { Box, Flex, Container, Heading, Image, Stack, Text, useColorMode, Button } from "@chakra-ui/react"


export default function Page() {
  return (
    <>
      <Container maxW={'80%'} position="relative">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          pt={{ base: 19, md: 24 }}
        >
          <Stack
            align={'left'}
            textAlign={'left'}
            pl={'15px'}
            spacing={{ base: 8, md: 10 }}
            maxWidth={{ base: "full", md: "50%" }}
          >
            <Heading
              fontWeight={800}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              lineHeight={'120%'}
              maxW={'500px'}
            >
              Современный <Text color={"yellow.400"}>массовый</Text> спамер для Telegram.
            </Heading>
          </Stack>
          <Box
            maxW={{ base: "full" }}
            mt={{ base: 12, sm: 16, md: 0 }}
            position="relative"
            ml={{ base: 0, md: "4rem" }} // Увеличьте отступ справа на медиа-запросе для md и более широких экранов
          >
            <Image
              borderRadius="md"
              src="images/png/eQQJdYU.png"
              alt=""
              width="full"
            />
          </Box>
          
        </Flex>

        <Box py={"40px"}>
          <Line/>
        </Box>

      </Container>
    </>
  )
}


