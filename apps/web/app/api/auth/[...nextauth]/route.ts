import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import User from '../../../../lib/model/User';
import dbConnect from '../../../_mongoDb/db';
import { GOOGLE_CLIENT_SECRET, GOOGLE_ID, NEXTAUTH_SECRET } from '../../../../util/secrets';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID || "",
      clientSecret: GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' },
      },
      async authorize(credentials: any) {
        // const email = credentials.username;
        // const password = credentials.password;
        // await dbConnect();
        // const ifUserExists = await User.findOne({ email: email });
        // if (ifUserExists) {
        //   return null;
        // }
        // const user = await User.create({ email: email });
        return {
          id: '2',
          name: 'Sourabh',
          email: 'sourabh.verma@gmail.com',
        };
      },
    }),
  ],
  secret: NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }) => {
      return token;
    },
    session: ({ session, generateSessionToken, user }: any) => {
      return session;
    },
  },
});
export const GET = handler;
export const POST = handler;
