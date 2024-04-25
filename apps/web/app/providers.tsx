"use client"
import { SessionProvider } from 'next-auth/react'
type SessionProviderType = React.ComponentProps<typeof SessionProvider>;

const Providers = ({ children, session }: { children: React.ReactNode; session: any }) => {
    return <SessionProvider session={session}>{children}</SessionProvider>
}

// Define the type of SessionProvider

export default Providers;