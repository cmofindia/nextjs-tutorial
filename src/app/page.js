import { redirect } from "next/navigation";
import { auth } from "./auth";
import Link from "next/link";

export default async function Home() {
	const session = await auth();
	console.log("Home Page Session: ", session);
	if (!session) redirect("/api/auth/signin");
	return (
		<div className='max-w-xl mx-auto mt-20'>
			<div className='text-4xl text-gray-800'>Welcome {session.user?.name}</div>
			<div>Role : {session.user?.role}</div>
			<Link href='/api/auth/signout'>Logout</Link>
		</div>
	);
}
