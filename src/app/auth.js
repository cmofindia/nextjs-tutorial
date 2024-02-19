import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { DBConnect } from "./mongodb/DBConnection";
import User from "./mongodb/model/user";
import bcrypt from "bcrypt";
import { checkPassword } from "./components/action/checkPassword";
export const {
	auth,
	signIn,
	handlers: { GET, POST },
} = NextAuth({
	providers: [
		Credentials({
			name: "credentials",
			async authorize(credential) {
				await DBConnect();
				const user = await User.findOne({
					username: credential?.username,
				});
				if (!user) return null;
				else {
					const res = await checkPassword({
						user,
						password: credential?.password,
					});
					if (res) return user;
					else return null;
				}
			},
		}),
	],
	secret: process.env.AUTH_SECRET,
	pages: {
		signIn: "/login",
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.role = "admin";
			}
			return token;
		},
		session: async ({ session, token }) => {
			if (session?.user) {
				session.user.role = token.role;
			}
			return session;
		},
	},
	session: {
		strategy: "jwt",
		maxAge: 10 * 60 * 60,
	},
});
