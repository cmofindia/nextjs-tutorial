import Link from "next/link";
import React from "react";

function Nav() {
	return (
		<div className='px-5 text-bold text-xl my-10'>
			<div className='flex flex-col gap-3'>
				<Link
					className='border-b-[1px] border-gray-50 hover:bg-emerald-900 px-3 py-1'
					href='/dashboard'
				>
					Dashboard
				</Link>
				<Link
					className='border-b-[1px] border-gray-50 hover:bg-emerald-900 px-3 py-1'
					href='/profile'
				>
					Profile
				</Link>
				<Link
					className='border-b-[1px] border-gray-50 hover:bg-emerald-900 px-3 py-1'
					href='/details'
				>
					Details
				</Link>
			</div>
		</div>
	);
}

export default Nav;
