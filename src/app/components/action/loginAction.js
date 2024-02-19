"use server";

import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";
export async function loginAction(formData) {
	try {
		await signIn("credentials", {
			username: formData.username,
			password: formData.password,
			redirectTo: "/",
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "Invalid Credentials" };
				default:
					return { error: "Unknown Error Found" };
			}
		}
		throw error;
	}

	//console.log(formData);
}
