import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Kiosk Next.js',
	description:
		'Kiosk built with Next.js, App Router, Tailwind CSS, TypeScript, PostgreSQL and Prisma',
	authors: [
		{
			name: 'Mateo Tavera',
			url: 'https://www.linkedin.com/in/matiudev/',
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
			>
				{children}
			</body>
		</html>
	);
}
