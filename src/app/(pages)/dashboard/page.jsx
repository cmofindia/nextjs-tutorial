import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

async function DashboardPage() {
	const session = await auth();
	if (!session) redirect("/login");
	console.log("Session : ", session);
	return <div>DashboardPage</div>;
}

export default DashboardPage;
