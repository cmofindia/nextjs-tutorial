"use client";

import { useState } from "react";
import { mailAction } from "./action/mailAction";
function InputEmailForm() {
	const [email, setEmail] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		await mailAction({ email });
	};
	return (
		<div className='max-w-sm  mx-auto  bg-sky-800 rounded-lg  p-10'>
			<h1 className='text-white text-center text-bold text-2xl py-4'>
				Input Email to Reset
			</h1>
			<form onSubmit={handleSubmit}>
				<fieldset className='flex flex-col gap-3 w-full'>
					<label className='text-white'>Email ID</label>
					<input
						type='text'
						onChange={(e) => setEmail(e.target.value)}
						className='rounded-lg p-1 outline-none border border-gray-100'
					/>
				</fieldset>
				<fieldset>
					<button
						className='px-5 py-1 bg-orange-800 text-white rounded-lg mt-5'
						type='submit'
					>
						Send
					</button>
				</fieldset>
			</form>
		</div>
	);
}

export default InputEmailForm;
