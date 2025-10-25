import localFont from 'next/font/local';

export const allianceSansSerif = localFont({
	src: [
		{
			path: './Alliance_No_1.woff2',
			weight: '400',
			style: 'normal',
		}
	],
	variable: "--font-sans",
	display: "auto",
});

// export const microsoftSansSerif = localFont({
// 	src: [
// 		{
// 			path: './Microsoft_Sans_Serif.woff2',
// 			weight: '400',
// 			style: 'normal',
// 		}
// 	],
// 	variable: "--font-sans-serif",
// 	display: "auto",
// });

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