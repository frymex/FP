'use client'

import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
} from '@chakra-ui/react'
// import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
})

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  )
}

