import { Container } from "lucide-react";
import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div>
			<title>Blogs by Ashish</title>
			<Container>{children}</Container>;
		</div>
	);
}
