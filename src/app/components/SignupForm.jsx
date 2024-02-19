"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { TiInfoOutline } from "react-icons/ti";
import Link from "next/link";
import { signupAction } from "./action/signupAction";
function SignupForm() {
	const [errorMessage, setErrorMessage] = useState(null);
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		await signupAction(data);
		// console.log("Response :", data);
	};
	return (
		<div className='max-w-md  mx-auto  bg-sky-800 rounded-lg min-h-[350px] p-10'>
			{errorMessage && (
				<div className='bg-orange-600 justify-center items-center p-1 my-3 rounded-lg flex flex-row gap-3'>
					<span>
						<TiInfoOutline />
					</span>
					<span>{errorMessage}</span>
				</div>
			)}
			<p className='mb-4 text-center text-3xl text-gray-50'>Signup Form</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className='flex flex-col gap-1 w-full'>
					<label className='text-white'>Username</label>
					<input
						placeholder='Username'
						type='text'
						{...register("username", { required: true })}
						className='rounded-lg p-1 outline-none border border-gray-100'
					/>
					{errors.username?.type == "required" && (
						<p className='text-yellow-600'>Username Required</p>
					)}
				</fieldset>

				<fieldset className='my-5 flex flex-col gap-1 w-full'>
					<label className='text-white'>Email</label>
					<input
						placeholder='abc@gmail.com'
						type='email'
						{...register("email", { required: true })}
						className='rounded-lg p-1 outline-none border border-gray-100'
					/>
					{errors.email?.type == "required" && (
						<p className='text-yellow-600'>Email Required</p>
					)}
				</fieldset>

				<fieldset className='my-5 flex flex-col gap-1 w-full'>
					<label className='text-white'>Password</label>
					<input
						placeholder='*******'
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
						Signup
					</button>
				</fieldset>
				<fieldset className='my-4 text-white'>
					Already registered
					<Link
						className='text-yellow-300'
						href='/login'
					>
						{" "}
						Login
					</Link>
				</fieldset>
			</form>
		</div>
	);
}

export default SignupForm;
