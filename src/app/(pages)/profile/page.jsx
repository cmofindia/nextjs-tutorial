import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

async function ProfilePage() {
	const session = await auth();
	if (!session) redirect("/login");
	console.log("Session : ", session);
	return <div>ProfilePage</div>;
}

export default ProfilePage;
