import localFont from 'next/font/local';
import { IBM_Plex_Serif, IBM_Plex_Mono } from 'next/font/google';

export const ibmPlexSerif = IBM_Plex_Serif({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-serif',
	display: 'swap',
});

export const ibmPlexMono = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-mono',
	display: 'swap',
});

export const suisseSansSerif = localFont({
	src: [
		{
			path: './Suisse_Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './Suisse_Medium.woff2',
			weight: '500',
			style: 'normal',
		}
	],
	variable: "--font-sans-serif",
	display: "auto",
});