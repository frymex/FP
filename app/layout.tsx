"use client"

import { ColorModeScript } from "@chakra-ui/react"
import Provider from "./provider"
import NavBar from "@/components/NavBar"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="dark">
      <head />
      <body suppressHydrationWarning={true}>
        <ColorModeScript type="cookie"/>
        <Provider>
          <NavBar />
            {children}
          </Provider>
      </body>
    </html>
  )
}