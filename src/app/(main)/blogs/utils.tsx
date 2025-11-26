import { ReactNode } from "react";

export const H1 = ({ children }: { children: ReactNode }) => {
	return (
		<div className="md:text-3xl text-xl text-zinc-900 font-bold">
			{children}
		</div>
	);
};

export const H2 = ({ children }: { children: ReactNode }) => {
	return (
		<div className="md:text-xl text-lg text-zinc-800 font-bold">{children}</div>
	);
};

export const P = ({ children }: { children: ReactNode }) => {
	return <div className="md:text-md text-sm text-zinc-600">{children}</div>;
};

export const Container = ({ children }: { children: ReactNode }) => {
	return <div className="max-w-lg h-full w-full">{children}</div>;
};
