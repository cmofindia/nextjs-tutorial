"use client";

import { useForm } from "react-hook-form";
import { loginAction } from "./action/loginAction";
import { useState } from "react";
import { TiInfoOutline } from "react-icons/ti";
import Link from "next/link";
function LoginForm() {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm();
	const [errorMessage, setErrorMessage] = useState(null);
	const onSubmit = async (data) => {
		const res = await loginAction(data);
		setErrorMessage(res?.error);
		console.log("Response :", res);
	};
	return (
		<div className='max-w-sm  mx-auto  bg-sky-800 rounded-lg min-h-[350px] p-10'>
			<div className='text-center text-3xl text-orange-500 underline font-bold'>
				Login
			</div>
			{errorMessage && (
				<div className='bg-orange-600 justify-center items-center p-1 my-3 rounded-lg flex flex-row gap-3'>
					<span>
						<TiInfoOutline />
					</span>
					<span>{errorMessage}</span>
				</div>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className='flex flex-col gap-3 w-full'>
					<label className='text-white'>Username</label>
					<input
						type='text'
						{...register("username", { required: true })}
						className='rounded-lg p-1 outline-none border border-gray-100'
					/>
					{errors.username?.type == "required" && (
						<p className='text-yellow-600'>Username Required</p>
					)}
				</fieldset>

				<fieldset className='my-2 flex flex-col gap-3 w-full'>
					<label className='text-white'>Password</label>
					<input
						type='password'
						{...register("password", { required: true })}
						className='rounded-lg p-1 outline-none border border-gray-100'
					/>
					{errors.password?.type == "required" && (
						<p className='text-yellow-600'>password Required</p>
					)}
				</fieldset>
				<fieldset>
					<button
						className='px-5 py-1 bg-orange-800 text-white rounded-lg mt-5'
						type='submit'
					>
						Login
					</button>
				</fieldset>
				<fieldset className='my-4 text-sm text-slate-100'>
					Forgot your password?{" "}
					<Link
						href='/reset'
						className='text-orange-500 font-semibold'
					>
						Reset it here.
					</Link>
				</fieldset>
				<fieldset className='my-4 text-white'>
					Not yet registered?
					<Link
						className='text-yellow-300'
						href='/signup'
					>
						{" "}
						Signup
					</Link>
				</fieldset>
			</form>
		</div>
	);
}

export default LoginForm;
