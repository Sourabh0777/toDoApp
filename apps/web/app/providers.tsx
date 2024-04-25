"use client"
import { SessionProvider } from 'next-auth/react'

const Providers = ({ children, session }: any) => {
    return <SessionProvider session={session}>{children}</SessionProvider>
}

// Define the type of SessionProvider

export default Providers;