"use server";

import { DBConnect } from "@/app/mongodb/DBConnection";
import bcrypt from "bcrypt";
import User from "@/app/mongodb/model/user";
import { redirect } from "next/navigation";

export async function updatePassword({ newPassword, token }) {
	console.log(token);
	console.log(newPassword);
	await DBConnect();
	const user = await User.find({ verifytoken: token });
	console.log("User Details : ", user);

	const salt = await bcrypt.genSalt(20);
	const passwordHashed = await bcrypt.hash(newPassword, salt);

	await User.findOneAndUpdate(
		{ verifytoken: token },
		{ password: passwordHashed }
	);

	// await User.findOneAndUpdate(
	// 	{ verifytoken: token },
	// 	{ password: passwordHashed }
	// );
	//redirect("/login");
}
