"use client";

import { updatePassword } from "@/app/components/action/updatePassword";
import { useState } from "react";

function ResetPasswordPage({ params }) {
	const [newPassword, setNewPassword] = useState("");
	const [reenterPassword, setReenterPassword] = useState("");

	const handlFormSubmit = async (e) => {
		e.preventDefault();
		await updatePassword({ newPassword, token: params.token });
		console.log({ newPassword, reenterPassword });
	};
	return (
		<div className='max-w-sm  mx-auto  bg-sky-800 rounded-lg  p-10'>
			<h1 className='text-white text-center text-bold text-2xl py-4'>
				Reset Password
			</h1>
			<form onSubmit={handlFormSubmit}>
				<fieldset className='flex flex-col gap-3 w-full'>
					<label className='text-white'>New Password</label>
					<input
						type='text'
						onChange={(e) => setNewPassword(e.target.value)}
						className='rounded-lg p-1 outline-none border border-gray-100'
					/>
				</fieldset>
				<fieldset className='flex flex-col gap-3 w-full'>
					<label className='text-white'>Re-Enter Password</label>
					<input
						type='text'
						onChange={(e) => setReenterPassword(e.target.value)}
						className='rounded-lg p-1 outline-none border border-gray-100'
					/>
				</fieldset>
				<fieldset>
					<button
						className='px-5 py-1 bg-orange-800 text-white rounded-lg mt-5'
						type='submit'
					>
						Submit
					</button>
				</fieldset>
			</form>
		</div>
	);
}

export default ResetPasswordPage;
