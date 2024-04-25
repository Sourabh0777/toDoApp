"use client"
import { SessionProvider } from 'next-auth/react'

const Providers = ({ children }: any) => {
    return <SessionProvider >{children}</SessionProvider>
}

// Define the type of SessionProvider

export default Providers;