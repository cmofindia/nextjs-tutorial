"use server";
import bcrypt from "bcrypt";
export async function checkPassword({ user, password }) {
	console.log("In password check");
	console.log("user : ", user);
	console.log("Password :", password);
	const match = await bcrypt.compare(password, user.password);
	console.log("Matched :", match);
	return match;
}
