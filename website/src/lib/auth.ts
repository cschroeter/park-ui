import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Postmark from 'next-auth/providers/postmark'

const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: { ...session.user, id: String(token.sub) },
    }),
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    Google,
    GitHub,
    Postmark({
      from: 'Park UI <noreply@park-ui.com>',
    }),
  ],
})
