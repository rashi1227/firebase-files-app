import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers as needed
  ],
  // Specify a secret for NextAuth.js to use
  secret: 'zgnsinS+S6I2PaU8OQwPvQ3Gsqii9qDd2gdjBYxv3Qw=',
  // Add other options as needed
};

export default NextAuth(options);
    